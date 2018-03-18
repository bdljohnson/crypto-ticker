let compareFunctions = {
    top: (a, b) => {
        return parseInt(b.price_usd) - parseInt(a.price_usd);
    },
    oneDay: (a, b) => {
        return parseInt(b.percent_change_24h) - parseInt(a.percent_change_24h);
    },
    oneWeek: (a, b) => {
        return parseInt(b.percent_change_7d) - parseInt(a.percent_change_7d);
    },
    marketCap: (a, b) => {
        return parseInt(b.market_cap_usd) - parseInt(a.market_cap_usd);
    }
}

export default compareFunctions;