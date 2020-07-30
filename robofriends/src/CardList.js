import React from 'react'
import Card from './Card.js'
// import { robots } from './robots'

//Made this component so we wouldnt 
//have to manually write out the cards like we were doing before

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
    return (
    <Card key = {i} 
    id={robots[i].id} 
    name= {robots[i].name} 
    email = {robots[i].email}/>
    )})

    return (
    <div> 
        {cardComponent}
    </div>
    )
}

export default CardList

