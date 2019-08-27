import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function DialogSelect() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
        language: '',
        category: ''
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: Number(event.target.value) });
    };

    function handleClickOpen() {
        setState({ ...state, open: true });
    }

    function handleClose() {
        setState({ ...state, open: false });
    }

    return (
        <div style={{display: "inline"}}>
            <Button onClick={handleClickOpen}>Search tools</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
                <DialogTitle>Select:</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Language</InputLabel>
                            <Select
                                value={state.language}
                                onChange={handleChange('language')}
                                input={<Input id="age-simple" />}
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
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Category</InputLabel>
                            <Select
                                value={state.category}
                                onChange={handleChange('category')}
                                input={<Input id="age-simple" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
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
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
