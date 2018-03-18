import React, { Component } from 'react';

class Coin extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let oneDay = 'green';
        let oneWeek = 'green';
        if(parseInt(this.props.coin.percent_change_24h) < 0){
            oneDay = 'red';
        }
        if(parseInt(this.props.coin.percent_change_7d) < 0){
            oneWeek = 'red';
        }
        return ( 
            <div className="coinItem">
                <div className="coin-main">
                <h2>{this.props.coin.name}</h2>
                <ul>
                    <li>USD: ${this.props.coin.price_usd}</li>
                </ul>
                </div>
                <div className="coin-details">
                    <h4>1d: <span className={oneDay}>{this.props.coin.percent_change_24h}%</span></h4>
                    <h4>7d: <span className={oneWeek}>{this.props.coin.percent_change_7d}%</span></h4>
                </div>
            </div>
         )
    }
}
 
export default Coin;