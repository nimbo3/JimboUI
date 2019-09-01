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
        let url = "http://localhost:8000/test/top?category=" + this.state.category;

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

function TopTechnology() {
    return (
        <TopPages category={"technology"}/>
    )
}

export default TopTechnology;