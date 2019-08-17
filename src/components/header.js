import React, {Component} from "react";
import Button from "@material-ui/core/Button";

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
            user: null
        }
    }

    render() {
        let account_profile_classes = classNames({
            "account-profile": true,
            "justify-content-center": true,
            "text-center": true
        });

        let content = (
            <div>
                <Button>Login</Button>
                <Button>SignUp</Button>
            </div>
        );

        if(this.state.user !== null)
            content = (
                <div className={account_profile_classes}>
                    {this.state.user.username.charAt(0).toUpperCase()}
                </div>
            );

        return (
            <div className={"header"}>
                {content}
            </div>
        )
    }
}

export default Header;