import React, { Component } from 'react'
import ToDoItems from './ToDoItems'
import FlipMove from 'react-flip-move'


export default class ToDoList extends Component {

    state = {
        taskItems: []
    }

    //Store the to do items on local storage
    updateLocalStorage = () => {
        localStorage.setItem('taskItems', JSON.stringify(this.state.taskItems))
    }

    //Update the state with items from local Storage


    componentDidMount() {
        let listFromLocalStorage = JSON.parse(localStorage.getItem('taskItems'))
        if (this.state.taskItems.length === 0) {
            this.setState({ taskItems: listFromLocalStorage })
        }
    }

    //functions
    //adds an item to the to do list state
    addItem(evt) {
        evt.preventDefault()
        let itemValue = this._inputValue.value
        let newList = [...this.state.taskItems]
        if (itemValue !== '') {
            newList.push(itemValue)
            this.setState({ taskItems: newList }, this.updateLocalStorage)
            this._inputValue.value = ''
        }
    }


    //delete an item from the list
    //Ask Brandon and Chad about this
    deleteItem = (toDoListKey) => {
        let newToDoList = this.state.taskItems.filter((item, key) => {
            return toDoListKey !== key
        })
        this.setState({ taskItems: newToDoList }, this.updateLocalStorage)
    }

    render() {

        //check localstorage for to do items to upload

        //Print an array of items
        let toDoList = this.state.taskItems.map((item, index) => {
            return (
                <ToDoItems key={index} index={index} item={item} deleteItem={this.deleteItem} />

            )
        })

        //CSS styling
        //Style for to do Form
        const toDoFormStyle = {
            minWidth: '20em',
            maxWidth: '28em',
            margin: '0 auto',
            padding: '2em',
            borderRadius: '1em',
        }

        //Style for UL List
        const toDoListStyle = {
            listStyle: 'none',
            padding: '0.5em',
            overflowY: 'auto',
            height: '70vh',
            background: 'url(https://images.unsplash.com/photo-1562824429-7c023697286d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)',
            borderRadius: '1em',
        }

        //Style for input field
        const toDoInputFieldStyle = {
            width: '75%',
            height: '2.5em',
            fontSize: '1.5em',
            border: 'none',
            borderBottomStyle: 'solid',
            borderBottomColor: 'rgba(255,255,255,0.8)'
        }

        //Style for to do list button
        const toDoButtonStyle = {
            marginLeft: '3%',
            width: '20%',
            padding: '0.3em',
            color: 'white',
            fontSize: '1.5em',
            backgroundColor: 'rgb(46, 61, 70)',
            borderRadius: '0.4em',
            boxShadow: "0 0 11px rgba(33,33,33,.2)"
        }

        return (

            <form style={toDoFormStyle}>
                <input style={toDoInputFieldStyle} ref={(a) => this._inputValue = a} placeholder='Enter an item' />
                <button style={toDoButtonStyle} onClick={(evt) => this.addItem(evt)} className='addButton' type='submit'>Add</button>
                <ul style={toDoListStyle}>
                    <FlipMove duration={350} easing='ease-out'>
                        {toDoList}
                    </FlipMove>
                </ul>
            </form >

        )
    }
}
