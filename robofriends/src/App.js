import React, { Component }from 'react';
import CardList from './CardList'
import './App.css';
import { robots } from './robots'
import SearchBox from './SearchBox'
// import { render } from 'react-dom';

//left off on vid 213


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }


    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        //console.log(event.target.value) this will just give us the value of the targeted element (in this case input)
    }


    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className = "tc">
            <h1>RoboFriends</h1>
            <SearchBox searchchange = {this.onSearchChange} />
            <CardList robots = {filteredRobots} />
            </div>
            )
        }

    }

export default App;
