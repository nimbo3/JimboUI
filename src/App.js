import React, {Component} from 'react';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';

class App extends Component {

    render = () => (
        <div className={"App-header"}>
            <h1 className>Joojle</h1>
            <Paper className={"App-search-input-root"}>
                <InputBase
                    className={"App-input"}
                    placeholder="Search"
                />
                <IconButton className={"App-icon-button"} aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </Paper>

            <ButtonGroup variant="contained" color={"#ffff00"} size="large"
                         aria-label="large contained secondary button group">
                <Button>Joojle Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </ButtonGroup>
        </div>
    )
}

export default App;
