import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { progressBarFetch, setOriginalFetch } from 'react-fetch-progressbar';
import { ProgressBar } from 'react-fetch-progressbar';

setOriginalFetch(window.fetch);
window.fetch = progressBarFetch;

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: SearchResult.parseQuery(this.props.location.search),
            items: []
        };
        this.searchQuery = this.state.query;
        this.search = this.search.bind(this);
    }

    static parseQuery(queryString) {
        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query.q;
    }

    render = () => {
        return (
            <div>
                <ProgressBar style={{backgroundColor: "black"}}/>
                <div className={"search-header"}>
                    <h2>Joojle</h2>
                    <Paper className={"App-search-result-input-root"}>
                        <InputBase
                            onChange={e => {
                                this.searchQuery = e.target.value
                            }}
                            className={"App-input"}
                            placeholder="Search"
                            defaultValue={this.state.query}
                            onKeyPress={e => {
                                this.keyDown(e)
                            }}
                        />
                        <IconButton className={"App-icon-button"} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </div>
                <div className={"search-items"}>
                    {
                        this.state.items.map(item => (
                                <div className={"search-item"}>
                                    <a className={"search-item-title"} href={item.url}>{item.title}</a><br/>
                                    <a className={"search-item-url"} href={item.url}>{SearchResult.uriShow(item.url)}</a><br/>
                                    <span className={"search-item-text"}>{item.text}</span>
                                </div>
                            )
                        )
                    }
                </div>

            </div>
        );
    };

    search() {
        var url = "http://46.4.40.237:1478/search?q=" + this.searchQuery;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    query: this.searchQuery,
                    items: data
                });
                this.props.history.push("/search?q=" + this.searchQuery);
            })
            .catch(console.log)
    }

    static uriShow(uri) {
        let decode_uri = decodeURIComponent(uri);
        if(decode_uri.length > 100)
            decode_uri = decode_uri.substr(0, 100) + "...";
        return decode_uri;
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
