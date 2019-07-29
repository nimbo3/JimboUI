import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";

class SearchResult extends Component {
    state = {
        contacts: []
    };

    render = () => (
        <div>
            <div className={"search-header"}>
                <h2>Joojle</h2>
                <Paper className={"App-search-result-input-root"}>
                    <InputBase
                        className={"App-input"}
                        placeholder="Search"
                    />
                    <IconButton className={"App-icon-button"} aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Paper>
            </div>
            <div className={"search-items"}>
                <div className={"search-item"}>
                    <a className={"search-item-title"} href={"https://simple.wikipedia.org/wiki/Salam"}>Salam - Simple English Wikipedia, the free encyclopedia</a><br/>
                    <a className={"search-item-url"} href={"https://simple.wikipedia.org/wiki/Salam"}>https://simple.wikipedia.org/wiki/Salam</a><br/>
                    <span className={"search-item-text"}>
                        Salam or salaam (Arabic: سلام , salām) is an Arabic word that literally means "peace", but is also used as a general greeting, above all in Arabian countries and ...
                    </span>
                </div>
                <div className={"search-item"}>
                    <a className={"search-item-title"} href={"https://simple.wikipedia.org/wiki/Salam"}>Salam - Simple English Wikipedia, the free encyclopedia</a><br/>
                    <a className={"search-item-url"} href={"https://simple.wikipedia.org/wiki/Salam"}>https://simple.wikipedia.org/wiki/Salam</a><br/>
                    <span className={"search-item-text"}>
                        Salam or salaam (Arabic: سلام , salām) is an Arabic word that literally means "peace", but is also used as a general greeting, above all in Arabian countries and ...
                    </span>
                </div>
                <div className={"search-item"}>
                    <a className={"search-item-title"} href={"https://simple.wikipedia.org/wiki/Salam"}>Salam - Simple English Wikipedia, the free encyclopedia</a><br/>
                    <a className={"search-item-url"} href={"https://simple.wikipedia.org/wiki/Salam"}>https://simple.wikipedia.org/wiki/Salam</a><br/>
                    <span className={"search-item-text"}>
                        Salam or salaam (Arabic: سلام , salām) is an Arabic word that literally means "peace", but is also used as a general greeting, above all in Arabian countries and ...
                    </span>
                </div>
            </div>

        </div>
    );

    componentDidMount() {
        fetch('http://server1:9200/page/_search?q=title:iran')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

}

export default SearchResult;