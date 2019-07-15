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
        if(itemValue!== ''){
            newList.push(itemValue)
            this.setState({taskItems: newList}).bind(this)
        }
        this._inputValue.value = ''
        evt.preventDefault()
    }

    


    render() {
       
        let toDoList = this.state.taskItems.map((item,index) => {
            return (
                <ToDoItems  key={index} items={item} />
            )
        })

        return (
            <div>
                <form className='ToDoForm'>
                    <input className='toDoInputField' ref={(a) => this._inputValue = a} placeholder='Enter an item' />
                    <button onClick={(evt) => this.addItem(evt)} className='addButton' type='submit'>Add</button>
                    {toDoList}
                </form>
            </div>
        )
    }
}
