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
        this.fetch_search_result = this.fetch_search_result.bind(this);
    }

    static parseQuery(queryString) {
        let query = {};
        let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    render = () => {
        return (
            <div>
                <ProgressBar style={{backgroundColor: "black"}}/>
                <Header
                    searchField={true}
                    searchFieldValue={this.state.query.q}
                    ref={this.searchFieldRef}
                    onSearch={this.search}
                    onChange={this.handleChange}
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
        console.log(this.searchFieldRef.current.state);
        this.setState({
            ...this.state,
            query: {
                q: this.searchFieldRef.current.state.searchValue,
                ...this.searchFieldRef.current.state.filter
            }
        }, () => {
            this.fetch_search_result(this.state.query);
        });
    }

    fetch_search_result(query) {
        // let url = "http://46.4.40.237/test/?"; // For Publish
        let url = "http://localhost:8000/test/?"; // For Test

        let headers = {};
        if (cookies.get("user") !== undefined)
            headers = {
                "authorization": cookies.get("user").token
            };
        console.log(query);
        let search_address = "";
        for(let key in query) {
            search_address += `${key}=${query[key]}&`
        }
        this.props.history.push("/search?" + search_address.substr(0, search_address.length - 1));
        fetch(url + search_address.substr(0, search_address.length - 1), {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({
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
