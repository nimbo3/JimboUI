import React, {Component} from "react";
import Cookies from 'universal-cookie';
import Header from "./header";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";

const cookies = new Cookies();

class SearchHistory extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            "today": [
                {
                    query: "خرس سفید",
                    search_time: "2019-08-27T09:47:58.141Z",
                    language: null,
                    category: null
                },
                {
                    query: "خرس سفید",
                    search_time: "2019-08-27T09:47:58.141Z",
                    language: null,
                    category: null
                }
            ],
            "week": [],
            "month": []
        }
    }

    render() {
        return (
            <div className={"App-header"}>
                <Header/>
                Search history
                <div className={"container"}>
                    <div className={"row"}>
                        {
                            this.state.today.length !== 0 ? (
                                <div className={"col-12"}>
                                    <h4>today</h4>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Query</TableCell>
                                                <TableCell align="right">time</TableCell>
                                                <TableCell align="right">language</TableCell>
                                                <TableCell align="right">category</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.today.map(row => (
                                                <TableRow key={row.id}>
                                                    <TableCell component="th" scope="row">
                                                        {row.query}
                                                    </TableCell>
                                                    <TableCell align="right">{row.search_time}</TableCell>
                                                    <TableCell align="right">{row.language}</TableCell>
                                                    <TableCell align="right">{row.category}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            ) : ""
                        }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let url = "http://localhost:8000/test/history";
        // let url = "http://46.4.40.234/test/history";
        let headers = {};
        if (cookies.get("user") !== undefined)
            headers = {
                "authorization": cookies.get("user").token
            };

        fetch(url, {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState(data, () => {
                    console.log(this.state)
                });
            })
            .catch(console.log)

    }
}

export default SearchHistory;