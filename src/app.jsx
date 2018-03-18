import React, { Component } from 'react';
import Nav from './components/nav';
import CoinList from './components/coinlist';
import compareFunctions from './compare-functions'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            queryParams: {
                listNumber: '',
                sort: 'top'
            },
            coins: [],
            sliced: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(event){
        let sort;
        switch(event.target.value){
            case 'top':
                sort = compareFunctions.top;
                break;
            case 'oneDay':
                sort = compareFunctions.oneDay;
                break;
            case 'oneWeek':
                sort = compareFunctions.oneWeek;
                break;
            case 'default':
                sort = compareFunctions.marketCap;
                break;
        }
        console.log(sort);
        let sorted = this.state.coins.sort(sort);
        let sliced = sorted.slice(0, this.state.queryParams.listNumber);
        this.setState({
            queryParams: {
                sort: event.target.value
            },
            coins: sorted,
            sliced: sliced
        })
        
    }
    handleChange(event){
        let sliced = [];
        if(event.target.value !== this.state.queryParams.listNumber){
            sliced = this.state.coins.slice(0, event.target.value);
        }
        this.setState({
            queryParams: {
                listNumber: event.target.value
            },
            sliced: sliced
        });
        
        
    }

    componentDidMount() {
        
        let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=500'
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((body)=>{
            console.log(body);
            body.sort(compareFunctions.marketCap);
            let sliced = body.slice(0, 10);
            this.setState({
                coins: body,
                sliced: sliced
            });
        })
        .catch((error)=>{
            console.log(error)
        });
    }
    render(){
        
        return(
            <div>
                <Nav handleChange={this.handleChange} value={this.state.queryParams.listNumber} handleSort={this.handleSort} sort={this.state.queryParams.sort}/>
                
                <div className="main">
                    <CoinList coins={this.state.sliced} />
                </div>
            </div>
            
        )
    }
}

export default App;