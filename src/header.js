import React, {Component} from "react";
import AccountIcon from '@material-ui/icons/AccountCircle';
import RegisterIcon from '@material-ui/icons/PersonAdd';
import Button from "@material-ui/core/Button";
import LogoutIcon from '@material-ui/icons/ExitToApp';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import Paper from "@material-ui/core/Paper";
import Cookies from 'universal-cookie';
import FilterDialog from "./search_tools";

const cookies = new Cookies();

class Header extends Component {
    filterDialogRef = React.createRef();
    searchFieldRef = React.createRef();

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: cookies.get("user"),
            searchValue: this.props.searchFieldValue,
            filter: {}
        };

        this.filter = this.filter.bind(this);
    }

    render() {
        let rightMenu = (
            <div className={"float-right"}>
                <Button href={"/signup"}><RegisterIcon/>&nbsp;Register</Button>
                <Button href={"/login"}><AccountIcon/>&nbsp;Login</Button>
            </div>
        );

        if (this.state.user !== null && this.state.user !== undefined)
            rightMenu = (
                <div className={"float-right"}>
                    <Button href={"/history"}><HistoryIcon/>&nbsp;History</Button>
                    <Button href={"/logout"}><LogoutIcon/>&nbsp;Logout</Button>
                </div>
            );

        return (
            <div className={"app-header"}>
                <div>
                    {rightMenu}
                    <div className={"float-left"}>
                        <Button href={"/"}>Joojle</Button>
                        {
                            this.props.searchField ? (
                                <Paper className={"App-search-result-input-root"}>
                                    <InputBase
                                        onChange={e => {
                                            this.setState({
                                                "searchValue": e.target.value
                                            })
                                        }}
                                        className="App-input"
                                        placeholder="Search"
                                        defaultValue={this.props.searchFieldValue}
                                        onKeyPress={e => {
                                            this.keyPress(e)
                                        }}
                                        ref={this.searchFieldRef}
                                    />
                                    <IconButton onClick={this.props.onSearch} className={"App-icon-button"}
                                                aria-label="search">
                                        <SearchIcon/>
                                    </IconButton>
                                </Paper>
                            ) : " "
                        }&nbsp;
                        {
                            this.props.searchField ? (
                                <FilterDialog onFilter={this.filter} ref={this.filterDialogRef}/>
                            ) : ""
                        }
                    </div>
                </div>
            </div>
        )
    }

    keyPress(e) {
        if (e.key === 'Enter')
            this.props.onSearch()
    }

    filter() {
        let filter_list = this.filterDialogRef.current.state;
        let new_filter_list = {};
        for(let key in filter_list) {
            if(filter_list[key] !== "" && key !== "open")
                new_filter_list[key] = filter_list[key];
        }
        this.setState({
            ...this.state,
            filter: new_filter_list
        }, () => {
            this.props.onSearch();
        });

    }
}

export default Header;




