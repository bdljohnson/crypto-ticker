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
        //Don't want to mutate props here, sort is not pure.
        let coins = this.props.newState.coins;
        if(this.props.newState.filter != 'default'){
            coins = coins.filter(filterFunctions[this.props.newState.filter])
            console.log(coins);
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