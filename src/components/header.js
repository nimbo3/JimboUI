import React, {Component} from "react";
import Account from '@material-ui/icons/AccountCircle';
import Register from '@material-ui/icons/PersonAdd';
import Button from "@material-ui/core/Button";
import Logout from '@material-ui/icons/ExitToApp';

function classNames(classes) {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
}

class Header extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            user: this.props.user
        };
    }

    render() {
        const account_profile_classes = classNames({
            "account-profile": true,
            "justify-content-center": true,
            "text-center": true
        });

        let content = (
            <div>
                <Button href={"/signup"}><Register/>&nbsp;Register</Button>
                <Button href={"/login"}><Account/>&nbsp;Login</Button>
            </div>
        );

        if (this.state.user !== null && this.state.user !== undefined)
            content = (
                <Button><Logout/>&nbsp;Logout</Button>
            );

        return (
            <div className={"app-header"}>
                {content}
            </div>
        )
    }
}

export default Header;