import React, { Component } from 'react';

class FilterSelect extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <label>
                Filter:
                <select onChange={this.props.handleFilter} value={this.props.filter}>
                    <option value="default">None</option>
                    <option value="24hgain">Only 24h Gainers</option>
                    <option value="7dgain">Only 7d Gainers</option>
                </select>
            </label>
         )
    }
}
 
export default FilterSelect;