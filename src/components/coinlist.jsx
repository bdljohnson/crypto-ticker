import React, { Component } from 'react';
import Coin from './coin'
class CoinList extends Component {
    
    render() {
        
        let coins = [];
        
        if(this.props.coins){
            coins = this.props.coins.map((coin, index) => <Coin key={index} coin={coin}/>)
        }
        return ( 
            <div className="content">
                {coins}
            </div>
         )
    }
}
 
export default CoinList;