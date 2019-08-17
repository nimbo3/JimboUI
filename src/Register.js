import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TextField from "@material-ui/core/TextField";
import Header from "./components/header";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";


class Register extends Component {
    setValues(newValues) {
        this.setState({
            values: newValues
        })
    };

    handleChange = (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setValues({...this.state.values, [prop]: event.target.value});

        this.register = this.register.bind(this);
    };


    constructor(props: P, context: any) {
        super(props, context);

        this.state = {
            values: {
                username: "",
                email: "",
                password: "",
                showPassword: false,
            }
        }
    }

    render() {
        const handleClickShowPassword = () => {
            this.setValues({...this.state.values, showPassword: !this.state.values.showPassword});
        };

        const handleChange = (prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
            this.setValues({...this.state.values, [prop]: event.target.value});
        };

        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
        };

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
                                    onChange={this.handleChange("username")}
                                    placeholder="Enter a unique username"
                                    margin="normal"
                                    variant="outlined"
                                    className={"text-field"}
                                />
                                <TextField
                                    id="outlined-with-placeholder"
                                    label="Email"
                                    onChange={this.handleChange("email")}
                                    placeholder="Enter a valid unique email"
                                    margin="normal"
                                    variant="outlined"
                                    className={"text-field"}
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
                                                    {this.state.values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <Button variant="contained" color="primary" onClick={this.register}>
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
        console.log(this.state)
    }
}

export default Register;
