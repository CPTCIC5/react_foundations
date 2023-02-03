import React,{useState} from 'react'


export default function Content2() {
    const [count,setCount]=useState(0)
    const [isGoingOut,setisGoingOut]= useState(true)

    function changeGoingOutStatus(){
        setisGoingOut((currenDecision)=>{
            console.log(currenDecision)
            return currenDecision=!currenDecision
        })
    }

    function AddCount(){
        setCount((val) =>{
            console.log(val)
            return val+1
            //console.log(`xyz${val}`)
        })
    }
    function MinusCount(){
        setCount((val) =>{
            console.log(val)
            return val-1
            //console.log(`xyz${val}`)
        })
    }

    function MinusCount2(){
        setCount(prev => prev-1)
    }
    return (
        <>
    <button onClick={AddCount}/>
    <button onClick={MinusCount2}/>
    {count}
    <hr />
    <button onClick={changeGoingOutStatus}>{isGoingOut?"Yes":"No"}</button>
    </>
    )
}
