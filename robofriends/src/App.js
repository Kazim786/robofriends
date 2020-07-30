import React from 'react';
import CardList from './CardList'
import './App.css';
import { robots } from './robots'
import SearchBox from './SearchBox'
import { render } from 'react-dom';




class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield = ''
        }
    }
    render(){
        return(
            <div className = "tc">
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots = {robots} />
            </div>
            )
        }

    }

export default App;
