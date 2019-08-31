import React, {Component} from "react";
import Cookies from 'universal-cookie';
import Header from "./header";

const cookies = new Cookies();

class History extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            "today": [],
            "week": [],
            "month": []
        }
    }

    render() {
        return (
            <div className={"App-header"}>
                <Header/>
                <div className={"app-container"}>
                    salam
                </div>
            </div>
        );
    }
}

export default History;