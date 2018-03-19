import React, { Component } from 'react';
import Coin from './coin'
import compareFunctions from '../compare-functions';
import filterFunctions from '../filter-functions';

class CoinList extends Component {
    constructor(props){
        super(props);

    };


    render() {
        //get the sort function from props
        let sort = compareFunctions[this.props.newState.queryParams.sort];
        //don't want to mutate props
        let coins = this.props.newState.coins;

        //Filter here
        let filter = this.props.newState.filter;
        if(!(filter == 'default') && !(filter == 'popular')){
            coins = coins.filter(filterFunctions[filter])
        } else if(this.props.newState.filter == 'popular'){
            //Filter out anything below the mean 24 hour volume of coins, not sure if I want this or median.
            let mean = filterFunctions.findMean(coins);
            coins = coins.filter((coin)=>{  
                return parseFloat(coin['24h_volume_usd']) > mean;
            });
        }
        let sliced = [];

        //Sort the coins array.
        coins.sort(sort);

        //Slice after sorting.
        sliced = coins.slice(0, this.props.newState.queryParams.listNumber);

        //use coins array from earlier to reduce memory usage
        coins = sliced.map((coin, index) => <Coin key={index} coin={coin}/>)
        //style conditions

        return ( 
            <div className="content">
                {coins}
            </div>
         )
    }
}
 
export default CoinList;