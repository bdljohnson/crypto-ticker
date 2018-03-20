import React, { Component } from 'react';


class Page extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let pages = Math.ceil(this.props.arrLength / this.props.pageLength);
        let page = this.props.page;
        let pageOptions = [];
        for(let i = 0; i < pages; i++){
            
            pageOptions.push(<option key={i+1} value={i+1}>{i + 1}</option>);
        }
        return ( 
            <label>
                Page:
                <select onChange={this.props.handlePage} value={this.props.page}>
                    {pageOptions}
                </select>
            </label>
         )
    }
}
 
export default Page;