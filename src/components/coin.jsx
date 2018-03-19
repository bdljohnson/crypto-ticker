import React, { Component } from 'react';

class Coin extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        let oneDay = 'green';
        let oneWeek = 'green';
        //Parse the string values and set className appropriately
        if(parseFloat(this.props.coin.percent_change_24h) < 0){
            oneDay = 'red';
        }
        if(parseFloat(this.props.coin.percent_change_7d) < 0){
            oneWeek = 'red';
        }
        return ( 
            <div className="coinItem">
                <div className="coin-main">
                <h2>{this.props.coin.name} | {this.props.coin.symbol}</h2>
                <ul>
                    <li>USD: ${this.props.coin.price_usd}</li>
                    <li>Market Cap: ${this.props.coin.market_cap_usd}</li>
                    {/* linter is getting pissy about the string for this, had to use bracket notation*/}
                    <li>24h Volume: ${this.props.coin['24h_volume_usd']}</li>
                </ul>
                </div>
                <div className="coin-details">
                    <ul>
                        <li>1d: <span className={oneDay}>{oneDay == 'green' && '+'}{this.props.coin.percent_change_24h}%</span></li>
                        <li>7d: <span className={oneWeek}>{oneWeek == 'green' && '+'}{this.props.coin.percent_change_7d}%</span></li>
                    </ul>
                    
                </div>
            </div>
         )
    }
}
 
export default Coin;