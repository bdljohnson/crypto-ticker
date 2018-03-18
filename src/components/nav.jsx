import React, { Component } from 'react';
import Selector from './selector'
import SortSelector from './sort-selector';

class Nav extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let styles = {
            display: "flex",
            alignItems: "center",
            height: "9vh",
            width: "100vw",
            backgroundColor: "#2C2D38"
        }
        return (
            <div style={styles}>
            <Selector handleChange={this.props.handleChange.bind(this)} value={this.props.selectorValue} />
            <SortSelector handleSort={this.props.handleSort.bind(this)} sort={this.props.sort} />
            </div>
        )
    }
}

export default Nav;
