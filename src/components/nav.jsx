import React, { Component } from 'react';
import Selector from './selector'
import SortSelector from './sort-selector';
import FilterSelect from './filter-selector'
class Nav extends Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="nav">
            <Selector handleChange={this.props.handleChange.bind(this)} value={this.props.selectorValue} />
            <SortSelector handleSort={this.props.handleSort.bind(this)} sort={this.props.sort} />
            <FilterSelect handleFilter={this.props.handleFilter.bind(this)} filter={this.props.filter} />
            <div className="refresh" onClick={this.props.handleRefresh}>&#x21bb;</div>
            </div>
        )
    }
}

export default Nav;
