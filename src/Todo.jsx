import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { add, remove, removeAll } from './features/todoSlice'


export default function Todo(){

    let list = useSelector(state => state.todo.items)
    const dispatch = useDispatch()
    console.log(list)
    let [input, setInput] = useState('')

    let renderList = list.map((item, index) => {
        return (

            <li>{item} <button onClick={()=> dispatch(remove(index))}>Remove</button></li>
        )
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(add(input))
    }

    return(
        <div>
            <ul>
                {renderList}
            </ul>

        <form onSubmit={handleSubmit} action="">
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button>Add</button>
            
        </form>
        <button onClick={()=> dispatch(removeAll())}>Remove All</button>
        </div>
    )
}