import React, { Component } from 'react'
import ToDoItems from './ToDoItems'

export default class ToDoList extends Component {

    state = {
        taskItems: []
    }

    //adds an item to the to do list state
    addItem(evt) {
        let itemValue = this._inputValue.value
        let newList = [...this.state.taskItems]
        if (itemValue !== '') {
            newList.push(itemValue)
            this.setState({ taskItems: newList })
        }
        this._inputValue.value = ''
        evt.preventDefault()
    }




    render() {

        //Print an array of items
        let toDoList = this.state.taskItems.map((item, index) => {
            return (
                <ToDoItems key={index} item={item} />
            )
        })

        //CSS styling
        //Style for to do Form
        const toDoFormStyle = {
            width: '20em',
            margin: '0 auto'
        }

        //Style for UL List
        const toDoListStyle = {
            listStyle: 'none',
            padding: 0
        } 

        //Style for input field
        const toDoInputFieldStyle ={
            width: '15em',
            height: '2.5em',
            fontSize: '1em'
        }

        //Style for to do list button
        const toDoButtonStyle = {
            marginLeft: '1em',
            height: '3em',
            width: '3.5em',
            color: 'white',
            fontSize:'1em',
            backgroundColor: '#66CC00',
            borderRadius: '0.8em'
        }
        return (

            <form style={toDoFormStyle}>
                <input style={toDoInputFieldStyle} ref={(a) => this._inputValue = a} placeholder='Enter an item' />
                <button style={toDoButtonStyle} onClick={(evt) => this.addItem(evt)} className='addButton' type='submit'>Add</button>
                <ul style={toDoListStyle}>{toDoList}</ul>
            </form>

        )
    }
}
