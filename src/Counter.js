import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch();
    const counterval = useSelector(state => state.counterReducer);
    
  return (
    <div>
        <button onClick={() => {dispatch({type:'increment/counter'})}}>+</button>
        <span> {counterval}</span>
        <button onClick={() => {dispatch({type:'decrement/counter'})}}>-</button>
    </div>
  )
}

export default Counter