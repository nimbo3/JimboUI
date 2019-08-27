import React, {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './index.css';

class FilterDialog extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            language: '',
            category: ''
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOK = this.handleOK.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = name => event => {
        this.setState({...this.state, [name]: event.target.value});
    };

    handleClickOpen() {
        this.setState({...this.state, open: true});
    }

    handleClose() {
        this.setState({...this.state, open: false});
    }

    handleOK() {
        this.setState({...this.state, open: false});
        this.props.onFilter();
    }

    render() {
        return (
            <div style={{display: "inline"}}>
                <Button onClick={this.handleClickOpen} size="small">Search tools</Button>
                <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Filter search result:</DialogTitle>
                    <DialogContent>
                        <form className="container">
                            <FormControl className="formControl" style={{margin: "5px"}}>
                                <InputLabel htmlFor="age-simple">Language</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.handleChange('language')}
                                    input={<Input id="age-simple"/>}
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    <MenuItem value="ar">Arabic</MenuItem>
                                    <MenuItem value="de">German</MenuItem>
                                    <MenuItem value="en">English</MenuItem>
                                    <MenuItem value="es">Spanish</MenuItem>
                                    <MenuItem value="fr">French</MenuItem>
                                    <MenuItem value="fa">Farsi</MenuItem>
                                    <MenuItem value="ru">Russian</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className="formControl" style={{margin: "5px"}}>
                                <InputLabel htmlFor="age-simple">Category</InputLabel>
                                <Select
                                    value={this.state.category}
                                    onChange={this.handleChange('category')}
                                    input={<Input id="age-simple"/>}
                                >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    <MenuItem value="economics">Economics</MenuItem>
                                    <MenuItem value="health">Health</MenuItem>
                                    <MenuItem value='sport'>Sport</MenuItem>
                                    <MenuItem value='technology'>Technology</MenuItem>
                                    <MenuItem value='art'>Art</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleOK} color="primary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default FilterDialog;