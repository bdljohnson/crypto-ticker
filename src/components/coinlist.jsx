import React, { Component } from 'react';
import Coin from './coin'
import compareFunctions from '../compare-functions';

class CoinList extends Component {
    constructor(props){
        super(props);

    };


    render() {
        let sort;

        sort = compareFunctions[this.props.newState.queryParams.sort];

        let coins = this.props.newState.coins;
        let sliced = [];
        coins.sort(sort);
        sliced = coins.slice(0, this.props.newState.queryParams.listNumber);


        
        let coinItems = sliced.map((coin, index) => <Coin key={index} coin={coin}/>)

        return ( 
            <div className="content">
                {coinItems}
            </div>
         )
    }
}
 
export default CoinList;