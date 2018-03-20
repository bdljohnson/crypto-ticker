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
            coins: [],
            filter: 'default',
            page: 1
        }
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePage = this.handlePage.bind(this);

    }
    handlePage(event){
        this.setState({
            page: event.target.value
        });
    }
    handleSort(event){

        //have to set both because state doesn't merge objects inside state

        this.setState({
            queryParams: {
                listNumber: this.state.queryParams.listNumber,
                sort: event.target.value
            }

        })
        
    }
    handleChange(event){

        //have to set both because state doesn't merge objects inside state

        this.setState({
            queryParams: {
                listNumber: event.target.value,
                sort: this.state.queryParams.sort
            },
            page: 1
        });
        
        
    }
    handleFilter(event){
        this.setState({
            filter: event.target.value
        })
    }
    handleRefresh(){
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
                coins: body
            });
            console.log('Refreshed at ' + Date.now())
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    componentDidMount() {

        //fetch top 100 cryptocurrencies

        let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=500'
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((body)=>{
            //set state with initial sort and limit params
            
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
        let navProps = {
            handleChange: this.handleChange,
            value: this.state.queryParams.listNumber,
            handleSort: this.handleSort,
            sort: this.state.queryParams.sort,
            handleFilter: this.handleFilter,
            filter: this.state.filter,
            handleRefresh: this.handleRefresh,
            page: this.state.page,
            handlePage: this.handlePage,
            arrLength: this.state.coins.length
        };

        return(
            <div>
                {/*selections all in nav*/}
                <Nav {...navProps} />
                
                <div className="main">
                    <CoinList newState={this.state} />
                </div>
                {/* add this later
                <div className="loader-overlay">
                    <div className="loader"></div>
                </div> */}
            </div>
            
        )
    }
}

export default App;