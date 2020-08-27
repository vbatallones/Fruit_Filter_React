import React, { Component } from 'react';
//make the list a sibling of the fruit component
import List from './List'

import Input from './Input'
class FruitContainer extends Component {
    //initial state
    state = {
        // initializing the fruits coming from the index.js
        fruitsToDisplay: this.props.fruits,
        //
        filterValue: ''
    }

    handleFilterChange = (e) => {
        // filter the fruits by its character
        const filterFruitList = this.props.fruits.filter((f) => {
            //add toLowerCase so it's not case sensitive
            //the includes method is saying that I we have this character in the arrays
            return f.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log(e.target.value)
        this.setState({
            fruitsToDisplay: filterFruitList
            // filterValue: e.target.value
        })
    }
    
    render () {
        // let allFruits = this.state.fruitsToDisplay.map((f, idx) => {
        //     return <List key={idx} body={f} />
        // })
        return (
            <>
                <h1>Hello fruitarian!!</h1>
                <Input  onChange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </>
        )
    }
}

export default FruitContainer