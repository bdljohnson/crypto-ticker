import React, { Component } from 'react';
import Selector from './selector'
import SortSelector from './sort-selector';
import FilterSelect from './filter-selector'
import Page from './page-selector'
class Nav extends Component {
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <div className="nav">
            <Selector handleChange={this.props.handleChange.bind(this)} value={this.props.value} />
            <Page handlePage={this.props.handlePage.bind(this)} pageLength={this.props.value} arrLength={this.props.arrLength} value={this.props.page} />
            <SortSelector handleSort={this.props.handleSort.bind(this)} sort={this.props.sort} />
            <FilterSelect handleFilter={this.props.handleFilter.bind(this)} filter={this.props.filter} />
            <button style={{fontSize: 28}} onClick={this.props.handleRefresh}>&#x21bb;</button>
            </div>
        )
    }
}

export default Nav;
