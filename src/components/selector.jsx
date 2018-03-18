import React, { Component } from 'react';

class Selector extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <label>
                Display:
                <select onChange={this.props.handleChange} value={this.props.value}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </label>
        )
    }
}
 
export default Selector;