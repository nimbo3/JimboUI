import React, {Component} from "react";

class SearchItems extends Component {

    render() {
        console.log(this.state);
        return (
            <div className={"w-100"}>
            {
                this.props.items.map(item => (
                        <div className={"search-item"}>
                            <a className={"search-item-title"} href={item.url}>{item.title}</a><br/>
                            <span className={"search-item-url"}>{SearchItems.uriShow(item.url)}</span><br/>
                            <span className={"search-item-text"} dangerouslySetInnerHTML={{__html: item.text}}/>
                        </div>
                    )
                )
            }
            </div>
        );
    }

    static uriShow(uri) {
        let decode_uri = decodeURI(uri);
        if(decode_uri.startsWith("http://"))
            decode_uri = decode_uri.substr(7);
        else if(decode_uri.startsWith("https://"))
            decode_uri = decode_uri.substr(8);
        while(decode_uri.endsWith("/"))
            decode_uri = decode_uri.substr(0, decode_uri.length - 1);
        let segments = decode_uri.split("/");
        let new_segments = segments;
        let last_segment = segments[segments.length - 1];
        if(last_segment.length > 50)
            last_segment = last_segment.substr(0, 50) + "...";
        if(segments.length > 4)
            new_segments = [segments[0], segments[1], "...", last_segment];
        return new_segments.join(" › ")
    }
}

export default SearchItems;