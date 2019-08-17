import React, {Component} from "react";
import AccountIcon from '@material-ui/icons/AccountCircle';
import RegisterIcon from '@material-ui/icons/PersonAdd';
import Button from "@material-ui/core/Button";
import LogoutIcon from '@material-ui/icons/ExitToApp';

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

        let rightMenu = (
            <div className={"float-right"}>
                <Button href={"/signup"}><RegisterIcon/>&nbsp;Register</Button>
                <Button href={"/login"}><AccountIcon/>&nbsp;Login</Button>
            </div>
        );

        if (this.state.user !== null && this.state.user !== undefined)
            rightMenu = (
                <div className={"float-right"}>
                    <Button href={"/logout"}><LogoutIcon/>&nbsp;Logout</Button>
                </div>

            );

        return (
            <div className={"app-header"}>
                <div>
                    <div className={"float-left"}>
                        <Button href={"/"}>Joojle</Button>
                    </div>
                    {rightMenu}
                </div>
            </div>
        )
    }
}

export default Header;