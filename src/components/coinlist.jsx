import React, { Component } from 'react';
import Coin from './coin'
import compareFunctions from '../compare-functions';

class CoinList extends Component {
    
    render() {
        let sort;
        let coins = this.props.coins;
        let sliced = [];
        switch(this.props.sort){
            case 'top':
                sort = compareFunctions.top;
                break;
            case 'marketCap':
                sort = compareFunctions.marketCap;
                break;
            case 'oneDay':
                sort = compareFunctions.oneDay;
                break;
            case 'oneWeek':
                sort = compareFunctions.oneWeek;
                break;
        };
        coins.sort(sort);
        sliced = coins.slice(0, this.props.listLength);
        console.log(coins);
        console.log(sliced);
        let coinItems = sliced.map((coin, index) => <Coin key={index} coin={coin}/>)

        return ( 
            <div className="content">
                {coinItems}
            </div>
         )
    }
}
 
export default CoinList;