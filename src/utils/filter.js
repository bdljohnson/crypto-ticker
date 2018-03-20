import filterFunctions from '../filter-functions';

let coinFilter = (coins, option)=>{
    switch(option){
        case 'default':
            return coins;
        case '24gain':
            return coins.filter(filterFunctions["24hgain"]);
        case '7dgain':
            return coins.filter(filterFunctions["7dgain"]);
        case 'popular':
            let mean = filterFunctions.findMean(coins);
            return coins.filter((coin)=>{  
                return parseFloat(coin['24h_volume_usd']) > mean;
            });
    }
}

export default coinFilter;