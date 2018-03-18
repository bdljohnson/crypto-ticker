import React, { Component } from 'react';
import Nav from './components/nav';
import CoinList from './components/coinlist';
import compareFunctions from './compare-functions'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            queryParams: {
                listNumber: 10,
                sort: 'marketCap'
            },
            coins: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(event){
        this.setState({
            queryParams: {
                listNumber: this.state.queryParams.listNumber,
                sort: event.target.value
            }

        })
        
    }
    handleChange(event){
        this.setState({
            queryParams: {
                listNumber: event.target.value,
                sort: this.state.queryParams.sort
            }
        });
        
        
    }

    componentDidMount() {
        
        let url = 'https://api.coinmarketcap.com/v1/ticker/'
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
                    <CoinList newState={this.state} />
                </div>
            </div>
            
        )
    }
}

export default App;