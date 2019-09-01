import React, {Component} from "react";
import {progressBarFetch, setOriginalFetch} from 'react-fetch-progressbar';
import {ProgressBar} from 'react-fetch-progressbar';
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
            query: "",
            filter: {},
            items: [],
            searchTime: -1,
            resultCount: 0
        };

        this.search = this.search.bind(this);
        this.fetch_search_result = this.fetch_search_result.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.parseQuery = this.parseQuery.bind(this);

        this.parseQuery();
    }

    parseQuery() {
        let queryString = this.props.location.search;
        let query = {};
        let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        this.state.query = query.q;
        this.state.filter = query;
    }


    render = () => {
        return (
            <div>
                <ProgressBar style={{backgroundColor: "black", height: "3px"}}/>
                <Header
                    searchField={true}
                    query={this.state.query}
                    filter={this.state.filter}
                    ref={this.searchFieldRef}
                    onSearch={this.search}
                    onChange={this.handleChange}
                />
                <div className={"search-items"}>
                    <div className={"search-item"}>
                        <small>
                            {this.state.searchTime === -1 ? "" : "About " + this.state.resultCount + " results in " + this.state.searchTime + " seconds"}
                        </small>
                        {
                            this.state.filter.category !== undefined && this.state.items.length !== 0 ? (
                                <strong><a href={"/top/" + this.state.filter.category}>
                                    <br/>view top page's in this category
                                </a></strong>
                            ) : ""
                        }
                    </div>
                    {
                        this.state.items.map(item => (
                                <div className={"search-item"}>
                                    <a className={"search-item-title"} href={item.url}>{item.title}</a><br/>
                                    <span className={"search-item-url"}
                                       href={item.url}>{SearchResult.uriShow(item.url)}</span><br/>
                                    <span className={"search-item-text"} dangerouslySetInnerHTML={{__html: item.text}}/>
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        );
    };

    handleChange(search: boolean) {
        this.setState({
            query: this.searchFieldRef.current.state.query,
            filter: this.searchFieldRef.current.state.filter
        }, () => {
            if(search)
                this.search();
        });
    }

    search() {
        this.fetch_search_result(this.state.query);
    }

    fetch_search_result(query) {
        let url = "http://46.4.40.237/test/?"; // For Publish
        // let url = "http://localhost:8000/test/?"; // For Test
        let headers = {};
        if (cookies.get("user") !== undefined)
            headers = {
                "authorization": cookies.get("user").token
            };
        let search_address = "";
        search_address = `q=${this.state.query}`;
        if (this.state.filter.language !== undefined && this.state.filter.language !== "")
            search_address += `&language=${this.state.filter.language}`;
        if (this.state.filter.category !== undefined && this.state.filter.category !== "")
            search_address += `&category=${this.state.filter.category}`;

        this.props.history.push("/search?" + search_address);
        fetch(url + search_address, {
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
        let decode_uri = decodeURI(uri);
        if(decode_uri.startsWith("http://"))
            decode_uri = decode_uri.substr(7);
        else if(decode_uri.startsWith("https://"))
            decode_uri = decode_uri.substr(8);
        let segments = decode_uri.split("/");
        let new_segments = segments;
        if(segments.length > 4)
            new_segments = [segments[0], segments[1], "...", segments[segments.length - 1]]
        return new_segments.join(" › ")
        // try {
        //     if (decode_uri.length > 100)
        //         decode_uri = decode_uri.substr(0, 100) + "...";
        //     return decode_uri;
        // } catch (e) {
        //     if (uri.length > 100)
        //         return uri.substr(0, 100) + "...";
        //     return uri;
        // }
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
