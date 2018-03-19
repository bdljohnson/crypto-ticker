import React, { Component } from 'react';

class SortSelector extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <label>
            Sort By:
            <select onChange={this.props.handleSort} value={this.props.sort}>
                <option value="marketCap">Market Cap</option>
                <option value="top">Top Value</option>
                <option value="oneDay">24h Perfomance</option>
                <option value="oneWeek">1w Performance</option>
                <option value="24hourvolume">24 Hour Volume</option>
            </select>
        </label> 
        )
    }
}
 
export default SortSelector;