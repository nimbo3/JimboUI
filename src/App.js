import React, {Component} from 'react';
import './App.css';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import Redirect from "react-router-dom/es/Redirect";
import Header from "./header";

class App extends Component {

    state = {
        redirect: false
    };

    constructor(props) {
        super(props);
        this.query = "";
        this.search = this.search.bind(this);
    }

    render = () => {
        if (!this.state.redirect)
            return (
                <div className={"App-header"}>
                    <Header searchField={false}/>
                    <h1>Joojle</h1>
                    <Paper className={"App-search-input-root"}>
                        <InputBase
                            onChange={e => {this.query = e.target.value}}
                            className={"App-input"}
                            placeholder="Search"
                            onKeyPress={e => {this.keyDown(e)}}
                        />
                        <IconButton className={"App-icon-button"} aria-label="search" onClick={this.search}>
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                    {this.state.redirect}
                    <ButtonGroup variant="contained" color="default" size="large"
                                 aria-label="large contained secondary button group">
                        <Button onClick={this.search}>Joojle Search</Button>
                        <Button>I'm Feeling Lucky</Button>
                    </ButtonGroup>
                </div>
            );
        else
            return (
                <Redirect to={'/search?q=' + this.query}/>
            )
    };


    search() {
        this.setState({
            redirect: true
        });
    }

    keyDown(e) {
        if(e.key === 'Enter')
            this.search();
    }

}

export default App;
