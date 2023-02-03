import React from 'react'
//import TodoItem from './TodoItem'
export default function Header(props) {
    return (
        <>
    <div>{props.div}</div>
    {console.log(props.data)}
    {props.data.map((data)=>{
        return (
            <>
            <p>{data.sno}</p>
            <p>{data.name}</p>
            <p>{data.amount}</p>
            <button onClick={props.onDelete}>DELETE</button>
            <hr />
            </>
            )
    })}
    </>
    )
}