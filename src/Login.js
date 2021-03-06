import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TextField from "@material-ui/core/TextField";
import Header from "./header";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// const rest_api_host = "localhost:8000";     // For Test
const rest_api_host = "46.4.40.237";     // For publish

class Login extends Component {
    setValues(newValues) {
        this.setState({
            values: newValues
        })
    };

    handleChange = (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setValues({...this.state.values, [prop]: event.target.value});
    };


    constructor(props: P, context: any) {
        super(props, context);
        this.login = this.login.bind(this);

        this.state = {
            values: {
                username: "",
                email: "",
                password: "",
                showPassword: false,
            },
            errors: {},
            created: false
        }
    }

    render() {
        const handleClickShowPassword = () => {
            this.setValues({...this.state.values, showPassword: !this.state.values.showPassword});
        };

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };

        if (this.state.created)
            return (
                <div className={"App-header"}>
                    <h2>Your logged in successfully</h2>
                    <Header/>
                    <Button variant="outlined" href={"/"}>Home</Button>
                </div>
            );
        else
            return (
                <div className={"App-header"}>
                    <Header/>
                    <div className={"app-container"}>
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
                                        onChange={this.handleChange("username")}
                                        placeholder="Enter a unique username"
                                        margin="normal"
                                        variant="outlined"
                                        className={"text-field"}
                                        helperText={this.state.errors.username}
                                        error={this.state.errors.username !== undefined}
                                    />
                                    <TextField
                                        id="outlined-with-placeholder"
                                        label="Password"
                                        onChange={this.handleChange("password")}
                                        type={this.state.values.showPassword ? 'text' : 'password'}
                                        placeholder="Enter password (at least 8 characters)"
                                        margin="normal"
                                        variant="outlined"
                                        className={"text-field"}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                    >
                                                        {this.state.values.showPassword ? <VisibilityOff/> :
                                                            <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        helperText={this.state.errors.password}
                                        error={this.state.errors.password !== undefined}
                                    />

                                    <Button variant="contained" color="primary" onClick={this.login}>
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            )
    }

    login() {
        let url = `http://${rest_api_host}/api/users/account-login`;
        let requestBody = {
            username: this.state.values.username,
            password: this.state.values.password
        };
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(res => {
                if (res.status === 202)
                    res.json().then(data => {
                        cookies.set('user', data, {path: '/'});
                        this.setState({
                            created: true,
                            errors: {}
                        })
                    });
                else if (res.status !== 202)
                    res.json().then(data => {
                        let errors = {};
                        if (data.username !== undefined)
                            errors.username = data.username;
                        if (data.password !== undefined)
                            errors.password = data.password;
                        this.setState({
                            ...this.state,
                            errors: errors
                        })
                    });
            })
            .catch(console.log)
    }
}

export default Login;
