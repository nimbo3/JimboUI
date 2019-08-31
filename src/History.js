import React, {Component} from "react";
import Cookies from 'universal-cookie';
import Header from "./header";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import LanguageIcon from '@material-ui/icons/Language';
import CategoryIcon from '@material-ui/icons/Category';
import Chip from "@material-ui/core/Chip";
import SwipeableViews from 'react-swipeable-views';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from "react-time-ago/modules/ReactTimeAgo";

const cookies = new Cookies();

JavascriptTimeAgo.locale(en);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

class SearchHistory extends Component {
    language_display = language => ({
        ar: "Arabic",
        de: "German",
        en: "English",
        es: "Spanish",
        fr: "French",
        fa: "Farsi",
        ru: "Russian"
    }[language]);

    category_display = category => ({
        economics: "Economics",
        health: "Health",
        sport: "Sport",
        technology: "Technology",
        art: "Art"
    }[category]);

    constructor(props, context) {
        super(props, context);

        this.state = {
            "today": [],
            "week": [],
            "month": [],
            "year": [],
            "tab": 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this)
    }

    useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            backgroundColor: "white",
            display: 'flex',
            height: 224,
        },
        tabs: {
            borderRight: `1px solid #999`,
        },
    }));

    handleChange(event, newValue) {
        this.setState({
            tab: newValue
        })
    }

    handleChangeIndex(index) {
        this.setState({
            tab: index
        })
    }

    render() {
        return (
            <div className="history-container">
                <Header/>
                <AppBar position="static" color={"white"}>
                    <Tabs
                        value={this.state.tab}
                        onChange={this.handleChange}
                        className={this.useStyles.tabs}
                        textColor="primary"
                        indicatorColor="primary"
                        centered
                    >
                        {
                            this.state.today.length === 0 ? "" : (
                                <Tab label="Today" {...a11yProps(0)} />
                            )
                        }
                        {
                            this.state.week.length === 0 ? "" : (
                                <Tab label="Last week" {...a11yProps(1)} />
                            )
                        }
                        {
                            this.state.month.length === 0 ? "" : (
                                <Tab label="Last month" {...a11yProps(2)} />
                            )
                        }
                        {
                            this.state.year.length === 0 ? "" : (
                                <Tab label="Last year" {...a11yProps(3)} />
                            )
                        }
                        {
                            this.state.year.length === 0 ? "" : (
                                <Tab label="Today" {...a11yProps(0)} />
                            )
                        }
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={'x'}
                    index={this.state.tab}
                    onChangeIndex={this.handleChangeIndex}
                >
                    {
                        this.state.today.length === 0 ? "" : (
                            <TabPanel value={this.state.tab} index={0}>
                                <Table className="history-table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Query</TableCell>
                                            <TableCell align="center">time</TableCell>
                                            <TableCell align="center">language</TableCell>
                                            <TableCell align="center">category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.today.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.query}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <ReactTimeAgo date={new Date(row.search_time)}/>
                                                </TableCell>
                                                <TableCell align="center">{
                                                    row.language === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<LanguageIcon/>}
                                                            label={this.language_display(row.language)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                                <TableCell align="center">{
                                                    row.category === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<CategoryIcon/>}
                                                            label={this.category_display(row.category)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                        )
                    }
                    {
                        this.state.week.length === 0 ? "" : (
                            <TabPanel value={this.state.tab} index={1}>
                                <Table className="history-table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Query</TableCell>
                                            <TableCell align="center">time</TableCell>
                                            <TableCell align="center">language</TableCell>
                                            <TableCell align="center">category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.week.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.query}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <ReactTimeAgo date={new Date(row.search_time)}/>
                                                </TableCell>
                                                <TableCell align="center">{
                                                    row.language === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<LanguageIcon/>}
                                                            label={this.language_display(row.language)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                                <TableCell align="center">{
                                                    row.category === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<CategoryIcon/>}
                                                            label={this.category_display(row.category)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                        )
                    }
                    {
                        this.state.month.length === 0 ? "" : (
                            <TabPanel value={this.state.tab} index={2}>
                                <Table className="history-table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Query</TableCell>
                                            <TableCell align="center">time</TableCell>
                                            <TableCell align="center">language</TableCell>
                                            <TableCell align="center">category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.month.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.query}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <ReactTimeAgo date={new Date(row.search_time)}/>
                                                </TableCell>
                                                <TableCell align="center">{
                                                    row.language === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<LanguageIcon/>}
                                                            label={this.language_display(row.language)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                                <TableCell align="center">{
                                                    row.category === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<CategoryIcon/>}
                                                            label={this.category_display(row.category)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                        )
                    }
                    {
                        this.state.year.length === 0 ? "" : (
                            <TabPanel value={this.state.tab} index={3}>
                                <Table className="history-table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Query</TableCell>
                                            <TableCell align="center">time</TableCell>
                                            <TableCell align="center">language</TableCell>
                                            <TableCell align="center">category</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.year.map(row => (
                                            <TableRow key={row.id}>
                                                <TableCell component="th" scope="row">
                                                    {row.query}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <ReactTimeAgo date={new Date(row.search_time)}/>
                                                </TableCell>
                                                <TableCell align="center">{
                                                    row.language === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<LanguageIcon/>}
                                                            label={this.language_display(row.language)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                                <TableCell align="center">{
                                                    row.category === null ? "" : (
                                                        <Chip
                                                            variant="outlined"
                                                            size="small"
                                                            icon={<CategoryIcon/>}
                                                            label={this.category_display(row.category)}
                                                            className="search-chip"
                                                        />
                                                    )
                                                }</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabPanel>
                        )
                    }
                </SwipeableViews>
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
                this.setState(data, () => {
                    console.log(this.state)
                });
            })
            .catch(console.log)

    }
}

export default SearchHistory;
