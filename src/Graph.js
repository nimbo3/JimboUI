/*global console*/
/*eslint require-jsdoc: 0, valid-jsdoc: 0, no-console: 0*/
import React, {Component} from "react";

import {Graph} from "react-d3-graph";


export default class MyGraph extends Component {
    constructor(props: P, context: any) {
        super(props, context);
        this.state = {
            nodes : [],
            links: []
        }
    }

    render() {
        // graph payload (with minimalist structure)
        // data schema
        // const data = {
        //     nodes: [{id: "Harry" , color: "red", size: 1000}, {id: "Sally"}, {id: "Alice"}],
        //     links: [{source: "Harry", target: "Sally",}, {source: "Harry", target: "Alice"}],
        //
        // }
// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
        const myConfig = {
            nodeHighlightBehavior: true,
            node: {
                color: "lightgreen",
                size: 120,
                highlightStrokeColor: "blue",
            },
            link: {
                highlightColor: "lightblue",
            },
        };

// graph event callbacks
        const onClickGraph = function () {
            // window.alert(`Clicked the graph background`);
        };

        const onClickNode = function (nodeId) {
            // window.alert(`Clicked node ${nodeId}`);
        };

        const onDoubleClickNode = function (nodeId) {
            // window.alert(`Double clicked node ${nodeId}`);
        };

        const onRightClickNode = function (event, nodeId) {
            // window.alert(`Right clicked node ${nodeId}`);
        };

        const onMouseOverNode = function (nodeId) {
            // window.alert(`Mouse over node ${nodeId}`);
        };

        const onMouseOutNode = function (nodeId) {
            // window.alert(`Mouse out node ${nodeId}`);
        };

        const onClickLink = function (source, target) {
            // window.alert(`Clicked link between ${source} and ${target}`);
        };

        const onRightClickLink = function (event, source, target) {
            // window.alert(`Right clicked link between ${source} and ${target}`);
        };

        const onMouseOverLink = function (source, target) {
            // window.alert(`Mouse over in link between ${source} and ${target}`);
        };

        const onMouseOutLink = function (source, target) {
            // window.alert(`Mouse out link between ${source} and ${target}`);
        };

        return (<Graph
            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
            data={this.state}
            config={myConfig}
            onClickNode={onClickNode}
            onRightClickNode={onRightClickNode}
            onClickGraph={onClickGraph}
            onClickLink={onClickLink}
            onRightClickLink={onRightClickLink}
            onMouseOverNode={onMouseOverNode}
            onMouseOutNode={onMouseOutNode}
            onMouseOverLink={onMouseOverLink}
            onMouseOutLink={onMouseOutLink}
        />);
    }

    function parseData(Data) {
        return;
    }
}
