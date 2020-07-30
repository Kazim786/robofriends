import React from 'react';
import CardList from './CardList'
import './App.css';
import { robots } from './robots'
import SearchBox from './SearchBox'
function App() {
return(
    <div>
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList robots = {robots} />
    </div>
)

}

export default App;
