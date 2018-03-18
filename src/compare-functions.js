let compareFunctions = {
    top: (a, b) => {
        return parseFloat(b.price_usd) - parseFloat(a.price_usd);
    },
    oneDay: (a, b) => {
        return parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h);
    },
    oneWeek: (a, b) => {
        return parseFloat(b.percent_change_7d) - parseFloat(a.percent_change_7d);
    },
    marketCap: (a, b) => {
        return parseFloat(b.market_cap_usd) - parseFloat(a.market_cap_usd);
    }
}

export default compareFunctions;