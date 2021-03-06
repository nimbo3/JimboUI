import React, {Component} from "react";
import SearchItems from "./SearchItems";
import Header from "./header";

class TopPages extends Component {


    constructor(props: P, context: any) {
        super(props, context);
        this.state = {
            items: [],
            category: this.props.category
        };

        this.fetch_pages = this.fetch_pages.bind(this);
        this.fetch_pages();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <Header/>

                <div className={"search-items"}>
                    <div className={"search-item"}>
                        <SearchItems items={this.state.items}/>
                    </div>
                </div>

            </div>
        )
    }

    fetch_pages() {
        // let url = "http://46.4.40.237/test/top?category=" + this.state.category;
        let url = "http://46.4.40.237/test/top?category=" + this.state.category;

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    items: data.searchItemList,
                });
            })
            .catch(console.log)
    }

}

export function TopTechnology() {
    return (
        <TopPages category={"technology"}/>
    )
}

export function TopSports() {
    return (
        <TopPages category={"sports"}/>
    )
}

export function TopArts() {
    return (
        <TopPages category={"arts"}/>
    )
}

export function TopEconomics() {
    return (
        <TopPages category={"economics"}/>
    )
}

export function TopHealth() {
    return (
        <TopPages category={"health"}/>
    )
}
