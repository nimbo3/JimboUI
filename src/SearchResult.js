import React, {Component} from "react";
import { progressBarFetch, setOriginalFetch } from 'react-fetch-progressbar';
import { ProgressBar } from 'react-fetch-progressbar';
import Header from "./header";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

setOriginalFetch(window.fetch);
window.fetch = progressBarFetch;

class SearchResult extends Component {
    searchFieldRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            query: SearchResult.parseQuery(this.props.location.search),
            items: [],
            searchTime: -1,
            resultCount: 0
        };
        this.search = this.search.bind(this);
    }

    static parseQuery(queryString) {
        let query = {};
        let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query.q;
    }

    render = () => {
        return (
            <div>
                <ProgressBar style={{backgroundColor: "black"}}/>
                <Header
                    searchField={true}
                    searchFieldValue={this.state.query}
                    ref={this.searchFieldRef}
                    onSearch={this.search}
                />
                <div className={"search-items"}>
                    <div className={"search-item"}>
                        <small>
                            {this.state.searchTime === -1 ? "" : "About " + this.state.resultCount + " results in " + this.state.searchTime + " seconds"}
                        </small>
                    </div>
                    {
                        this.state.items.map(item => (
                                <div className={"search-item"}>
                                    <a className={"search-item-title"} href={item.url}>{item.title}</a><br/>
                                    <a className={"search-item-url"} href={item.url}>{SearchResult.uriShow(item.url)}</a><br/>
                                    <span className={"search-item-text"} dangerouslySetInnerHTML={{__html: item.text}}/>
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        );
    };

    search() {
        let str = this.state.query;
        if(this.searchFieldRef.current.state !== undefined) {
            str = this.searchFieldRef.current.state.searchValue;
        }
        this.fetch_search_result(str)
    }

    fetch_search_result(str) {
        // let url = "http://46.4.40.237/test/?q=" + str; // For Publish
        let url = "http://localhost:8000/test/?q=" + str; // For Test

        let headers = {};
        if (cookies.get("user") !== undefined)
            headers = {
                "authorization": cookies.get("user").token
            };

        this.props.history.push("/search?q=" + str);
        fetch(url, {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    query: str,
                    items: data.items,
                    searchTime: data.searchTime,
                    resultCount: data.resultCount
                });
            })
            .catch(console.log)
    }

    static uriShow(uri) {
        try {
            let decode_uri = decodeURI(uri);
            if (decode_uri.length > 100)
                decode_uri = decode_uri.substr(0, 100) + "...";
            return decode_uri;
        } catch (e) {
            if (uri.length > 100)
                return uri.substr(0, 100) + "...";
            return uri;
        }
    }

    keyDown(e) {
        if (e.key === 'Enter')
            this.search();
    }

    componentDidMount() {
        this.search()
    }
}

export default SearchResult;
