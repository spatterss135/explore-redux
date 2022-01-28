import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'
import { useState } from 'react'

export const Counter = () => {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.counter.value)

    // And include the useDispatch hook...
    const dispatch = useDispatch()

    let [input, setInput] = useState(0)

    const byAmount = (e) => {
        e.preventDefault()
        console.log('hello')
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <input onChange={(e) =>{
                setInput(e.target.value)
            }}/>
            <button type='submit' onClick={(e)=> byAmount(e)}>Add/Subtract</button>
            
        </div>
    )
}
