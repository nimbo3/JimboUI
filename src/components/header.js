import React, {Component} from "react";
import AccountIcon from '@material-ui/icons/AccountCircle';
import RegisterIcon from '@material-ui/icons/PersonAdd';
import Button from "@material-ui/core/Button";
import LogoutIcon from '@material-ui/icons/ExitToApp';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";

function classNames(classes) {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
}

class Header extends Component {
    searchFieldRef = React.createRef();

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: this.props.user,
            searchValue: this.props.searchFieldValue
        };
    }

    render() {
        const account_profile_classes = classNames({
            "account-profile": true,
            "justify-content-center": true,
            "text-center": true
        });

        let rightMenu = (
            <div className={"float-right"}>
                <Button href={"/signup"}><RegisterIcon/>&nbsp;Register</Button>
                <Button href={"/login"}><AccountIcon/>&nbsp;Login</Button>
            </div>
        );

        if (this.state.user !== null && this.state.user !== undefined)
            rightMenu = (
                <div className={"float-right"}>
                    <Button href={"/logout"}><LogoutIcon/>&nbsp;Logout</Button>
                </div>
            );

        return (
            <div className={"app-header"}>
                <div>
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
                                        className={"App-input"}
                                        placeholder="Search"
                                        defaultValue={this.props.searchFieldValue}
                                        onKeyPress={e => {
                                            this.keyPress(e)
                                        }}
                                        ref={this.searchFieldRef}
                                    />
                                    <IconButton onClick={this.props.onSearch} className={"App-icon-button"} aria-label="search">
                                        <SearchIcon/>
                                    </IconButton>
                                </Paper>
                            ) : " "
                        }
                    </div>
                    {rightMenu}
                </div>
            </div>
        )
    }

    keyPress(e) {
        if (e.key === 'Enter')
            this.props.onSearch()
    }
}

export default Header;