import React, {Component} from "react";
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";

class SearchResult extends Component {
    state = {
        items: []
    };

    static parseQuery(queryString) {
        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    render = () => {
        let query = SearchResult.parseQuery(this.props.location.search);
        return (
            <div>
                <div className={"search-header"}>
                    <h2>Joojle</h2>
                    <Paper className={"App-search-result-input-root"}>
                        <InputBase
                            className={"App-input"}
                            placeholder="Search"
                            value={query.q}
                        />
                        <IconButton className={"App-icon-button"} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </div>
                <div className={"search-items"}>
                    {
                        this.state.items.map(
                            item => (
                                <div className={"search-item"}>
                                    <a className={"search-item-title"} href={item.url}>{item.title}</a><br/>
                                    <a className={"search-item-url"} href={item.url}>{item.url}</a><br/>
                                    <span className={"search-item-text"}>{item.text}</span>
                                </div>
                            )
                        )
                    }

                </div>

            </div>
        );
    };

    componentDidMount() {
        fetch("http://localhost:8000/test.json")
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data })
            })
            .catch(console.log)
    }
}

export default SearchResult;