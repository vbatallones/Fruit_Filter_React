import React, { Component } from 'react';

class Input extends Component {
   
    render() {
        return (
            <>
                <label for="fruit-filter">Filter these Fruits:</label>
                {/* by lifting the function we have to change it into this.props.functionName 
                and it should be the same name in the fruit container of the input. because we assign the on change function there*/}
                <input type="text" onChange={this.props.onChange} name="fruit-filter"/>
            </>
        )
    }
}


export default Input