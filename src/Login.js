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
                <div className={"app-container"}>
                    <Paper className={"paper"}>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <h3>Login to your Joojle account</h3>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Username"
                                    placeholder="Placeholder"
                                    margin="normal"
                                    variant="outlined"
                                    className={"text-field"}
                                />
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Password"
                                    placeholder="Placeholder"
                                    margin="normal"
                                    variant="outlined"
                                    className={"text-field"}
                                />
                                <Button variant="contained" color="primary">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}
