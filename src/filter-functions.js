let filterFunctions = {
    '24hgain': (coin)=>{
        return parseFloat(coin.percent_change_24h) > 0;
    },
    '7dgain': (coin)=>{
        return parseFloat(coin.percent_change_7d) > 0;
    },
    'findMean': (coins) => {
        let volumes = [];
        for(let i = 0; i < coins.length; i++){
            let coin = coins[i];
            volumes.push(parseFloat(coin['24h_volume_usd']));
        }
        let mean = 0;
        for(let i = 0; i < volumes.length; i++){
            mean += volumes[i];
        }
        mean /= volumes.length;
        return mean;
    }
}

export default filterFunctions;