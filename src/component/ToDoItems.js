import React, { Component } from 'react'

export default class ToDoItems extends Component {

    
    render() {
        return (
            <div>
                <li>{this.props.item}</li>
            </div>
        )
    }
}
