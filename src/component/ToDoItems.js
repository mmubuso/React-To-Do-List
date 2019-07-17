import React, { Component } from 'react'

export default class ToDoItems extends Component {

    
    render() {

        //CSS Styles
        //Style list items
        const listItemStyle = {
            borderRadius: '0.4em',
            backgroundColor: 'rgba(255,255,255,0.5)',
            fontSize: '2em',
            padding: '0.4em',
            margin: '0.5em',
            marginBottom: '0.2em',
            color: 'white',
            boxShadow: "0 0 11px rgba(33,33,33,.2)"
        }
        return (
            <div>
                <li 
                style={listItemStyle}
                onClick={()=> this.props.deleteItem(this.props.index)}>
                {this.props.item}</li>
            </div>
        )
    }
}
