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
import LanguageIcon from '@material-ui/icons/Language';
import CategoryIcon from '@material-ui/icons/Category';
import Cookies from 'universal-cookie';
import FilterDialog from "./search_tools";
import CloseIcon from '@material-ui/icons/Close';
import Chip from "@material-ui/core/Chip";
import {Tooltip} from "@material-ui/core";
import Popper from '@material-ui/core/Popper';
import Fade from "@material-ui/core/Fade";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import SuggestionIcon from '@material-ui/icons/LocalActivity';

const cookies = new Cookies();

class Header extends Component {
    filterDialogRef = React.createRef();
    searchFieldRef = React.createRef();

    language_display = language => ({
        ar: "Arabic",
        de: "German",
        en: "English",
        es: "Spanish",
        fr: "French",
        fa: "Farsi",
        ru: "Russian"
    }[language]);

    category_display = category => ({
        economics: "Economics",
        health: "Health",
        sport: "Sport",
        technology: "Technology",
        art: "Art"
    }[category]);

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: cookies.get("user"),
            query: this.props.query,
            filter: this.props.filter,
            suggests: [],
            selectedSuggestion: -1,
            anchor: null,
            suggestedCategory: ""
        };

        this.filter = this.filter.bind(this);
        this.updateSuggestions = this.updateSuggestions.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    render() {
        let rightMenu = (
            <div className={"float-right"}>
                <Tooltip title={"Sign up"}>
                    <IconButton href="/signup">
                        <RegisterIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title={"login"}>
                    <IconButton href="/login">
                        <AccountIcon/>
                    </IconButton>
                </Tooltip>
            </div>
        );

        let handleDelete = (filter_key) => () => {
            let newFilter = this.state.filter;
            delete newFilter[filter_key];

            this.setState({
                filter: newFilter
            }, () => {
                this.props.onChange(true);
            })
        };

        if (this.state.user !== null && this.state.user !== undefined) {
            rightMenu = (
                <div className={"float-right"}>
                    {
                        this.state.suggestedCategory === "" ? "" : (
                            <Tooltip title={"Suggestion"}>
                                <IconButton>
                                    <SuggestionIcon/>
                                </IconButton>
                            </Tooltip>
                        )
                    }
                    <Tooltip title={"Search history"}>
                        <IconButton href={"/history"}>
                            <HistoryIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"Logout"}>
                        <IconButton href={"/logout"}>
                            <LogoutIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }

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
                                                query: e.target.value
                                            }, () => {
                                                this.props.onChange(false);
                                            });
                                            this.setState({
                                                anchor: e.target,
                                                suggests: [],
                                                selectedSuggestion: -1
                                            });
                                            this.updateSuggestions();
                                        }}
                                        className="App-input"
                                        placeholder="Search"
                                        defaultValue={this.props.query}
                                        onKeyPress={e => {
                                            this.keyPress(e)
                                        }}
                                        onKeyDown={this.keyDown}
                                        ref={this.searchFieldRef}
                                    />
                                    {
                                        this.state.filter.language !== undefined && this.state.filter.language !== "" ?
                                            (
                                                <Chip
                                                    variant="outlined"
                                                    deleteIcon={<CloseIcon/>}
                                                    size="small"
                                                    icon={<LanguageIcon/>}
                                                    label={this.language_display(this.state.filter.language)}
                                                    onClick={this.handleClick}
                                                    onDelete={handleDelete("language")}
                                                    className="search-chip"
                                                />
                                            ) : ""
                                    }
                                    {
                                        this.state.filter.category !== undefined && this.state.filter.category !== "" ?
                                            (
                                                <Chip
                                                    variant="outlined"
                                                    deleteIcon={<CloseIcon/>}
                                                    size="small"
                                                    icon={<CategoryIcon/>}
                                                    label={this.category_display(this.state.filter.category)}
                                                    onClick={this.handleClick}
                                                    onDelete={handleDelete("category")}
                                                    className="search-chip"
                                                />
                                            ) : ""
                                    }
                                    <IconButton onClick={this.props.onSearch} className={"App-icon-button"}
                                                aria-label="search">
                                        <SearchIcon/>
                                    </IconButton>
                                </Paper>
                            ) : ""
                        }&nbsp;
                        {
                            this.props.searchField ? (
                                <FilterDialog onFilter={this.filter} ref={this.filterDialogRef}
                                              value={this.state.filter}/>
                            ) : ""
                        }
                        <Popper open={this.state.suggests.length !== 0} transition placement={"bottom-start"}
                                anchorEl={this.state.anchor}>
                            {({TransitionProps}) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        <MenuList>
                                            {
                                                this.state.suggests.map(suggestion => (
                                                    <MenuItem
                                                        itemID={this.state.suggests.indexOf(suggestion)}
                                                        selected={this.state.suggests.indexOf(suggestion) === this.state.selectedSuggestion}
                                                        onClick={() => {
                                                            this.setState({
                                                                query: suggestion
                                                            }, () => {
                                                                this.props.onChange();
                                                                this.searchFieldRef.current.getElementsByTagName("input")[0].value = suggestion;
                                                                this.setState({
                                                                    suggests: [],
                                                                    selectedSuggestion: -1
                                                                })
                                                            })
                                                        }}>{suggestion}</MenuItem>
                                                ))
                                            }
                                        </MenuList>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                    </div>
                </div>
            </div>
        )
    }

    keyPress(e) {
        if (e.key === 'Enter' && !(this.state.selectedSuggestion >= 0 && this.state.selectedSuggestion < this.state.suggests.length))
            this.props.onSearch();
    }

    keyDown(e) {
        console.log(e.key);
        if (e.key === 'ArrowDown' && this.state.selectedSuggestion < this.state.suggests.length)
            this.setState({
                selectedSuggestion: this.state.selectedSuggestion + 1
            });

        if (e.key === 'ArrowUp' && this.state.selectedSuggestion > 0)
            this.setState({
                selectedSuggestion: this.state.selectedSuggestion - 1
            });
        if (e.key === 'Enter' && this.state.selectedSuggestion >= 0 && this.state.selectedSuggestion < this.state.suggests.length)
            this.setState({
                query: this.state.suggests[this.state.selectedSuggestion]
            }, () => {
                this.props.onChange(true);
                this.searchFieldRef.current.getElementsByTagName("input")[0].value = this.state.suggests[this.state.selectedSuggestion];
                this.setState({
                    suggests: [],
                    selectedSuggestion: -1
                })
            });
        if (e.key === 'Escape') {
            this.setState({
                suggests: []
            })
        }
    }

    updateSuggestions() {
        let query = this.state.query;
        // let url = "http://localhost:8000/test/complete?q=" + query;
        let url = "http://46.4.40.237/test/complete?q=" + query;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    suggests: data
                })
            })
            .catch(console.log)
    }

    filter() {
        let filter_list = this.filterDialogRef.current.state;
        this.setState({
            filter: filter_list
        }, () => {
            this.props.onChange(true);
        });
    }
}

export default Header;