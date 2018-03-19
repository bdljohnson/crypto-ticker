let filterFunctions = {
    '24hgain': (coin)=>{
        return parseFloat(coin.percent_change_24h) > 0;
    },
    '7dgain': (coin)=>{
        return parseFloat(coin.percent_change_7d) > 0;
    }
}

export default filterFunctions;