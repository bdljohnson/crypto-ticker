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
                sort: ''
            },
            coins: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(event){
        this.setState({
            queryParams: {
                sort: event.target.value
            }
        })
        
    }
    handleChange(event){
        this.setState({
            queryParams: {
                listNumber: event.target.value
            }
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
            this.setState({
                queryParams: {
                    listNumber: 10,
                    sort: 'marketCap'
                },
                coins: body
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
                    <CoinList coins={this.state.coins} sort={this.state.queryParams.sort} listLength={this.state.queryParams.listNumber} />
                </div>
            </div>
            
        )
    }
}

export default App;