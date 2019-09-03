import React, {Component} from "react";
import {progressBarFetch, setOriginalFetch} from 'react-fetch-progressbar';
import {ProgressBar} from 'react-fetch-progressbar';
import Header from "./header";
import Cookies from 'universal-cookie';
import SearchItems from "./SearchItems";

const cookies = new Cookies();

setOriginalFetch(window.fetch);
window.fetch = progressBarFetch;

class SearchResult extends Component {
    searchFieldRef = React.createRef();

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.fetch_search_result = this.fetch_search_result.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.parseQuery = this.parseQuery.bind(this);

        let query_ = this.parseQuery()

        this.state = {
            query: query_.q,
            filter: query_,
            items: [],
            searchTime: -1,
            resultCount: 0
        };

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
        // this.setState({
        //     query: query.q
        // });
        // this.setState({
        //     filter: query
        // });
        console.log(query)
        return query;
    }


    render = () => {
        console.log(this.state);
        return (
            <div>
                <ProgressBar style={{backgroundColor: "black", height: "3px", position: "fixed"}}/>
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
                            {this.state.searchTime === -1 ? "" : "Fetch result in " + this.state.searchTime / 1000 + " seconds"}
                        </small>
                        {
                            this.state.filter.category !== undefined && this.state.items.length !== 0 ? (
                                <strong><a href={"/top/" + this.state.filter.category}>
                                    <br/>view top page's in this category
                                </a></strong>
                            ) : ""
                        }
                        <SearchItems items={this.state.items}/>

                    </div>

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

    keyDown(e) {
        if (e.key === 'Enter')
            this.search();
    }

    componentDidMount() {
        this.search()
    }
}

export default SearchResult;
