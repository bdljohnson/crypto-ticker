import React, { Component } from 'react';
import Nav from './components/nav';
import CoinList from './components/coinlist';
import coinFilter from './utils/filter';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            queryParams: {
                listNumber: 10,
                sort: 'marketCap'
            },
            coins: [],
            filteredCoins: [],
            filter: 'default',
            page: 1
        }
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.fetchData = this.fetchData.bind(this);

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
        let filtered = coinFilter(this.state.coins, event.target.value);
        this.setState({
            filteredCoins: filtered,
            filter: event.target.value
        })

    }
    handleRefresh(){
        this.fetchData();
    }
    fetchData(){
        let url = 'https://api.coinmarketcap.com/v1/ticker/?limit=500'
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error(res.status);
            }
            return res.json();
        })
        .then((body)=>{

            let filtered = [];
            if(this.state.filteredCoins.length > 1){
                filtered = coinFilter(body, this.state.filter);
            } else {
                filtered = body;
            }
            this.setState({
                coins: body,
                filteredCoins: filtered
            });

        })
        .catch((error)=>{
            console.log(error)
        });
    }
    componentWillMount(){
        this.fetchData();
    }
    componentDidMount() {
        setInterval(()=>this.fetchData(), 15000);      
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
            arrLength: this.state.filteredCoins.length
        };

        return(
            <div>
                {/*selections all in nav*/}
                <Nav {...navProps} />
                
                <div className="main">
                    {this.state.filteredCoins.length > 1 && <CoinList newState={this.state} />}
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