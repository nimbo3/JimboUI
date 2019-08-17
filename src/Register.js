import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TextField from "@material-ui/core/TextField";
import Header from "./components/header";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default class Register extends Component {
    render() {
        return (
            <div className={"App-header"}>
                <Header/>
                <div className={"container"}>
                    <Paper className={"paper"}>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <h3>Create new Joojle account</h3>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Username"
                                    placeholder="Enter a unique username"
                                    margin="normal"
                                    variant="outlined"
                                    className={"text-field"}
                                />
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Email"
                                    placeholder="Enter a valid unique email"
                                    margin="normal"
                                    variant="outlined"
                                    className={"text-field"}
                                />
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Password"
                                    placeholder="Enter password (at least 8 characters)"
                                    margin="normal"
                                    variant="outlined"
                                    className={"text-field"}
                                />
                                <Button variant="contained" color="primary">
                                    Register
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }

    register() {

    }
}
