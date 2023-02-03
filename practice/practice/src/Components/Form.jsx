import React,{useState} from 'react'

export default function Form() {

    const [name,setName]=useState("")
    const [lastname,setlastName]=useState("")
    function handleOnchange(event){
        setName(event.target.value)
    }
    function handleonChange2(event){
        return setlastName(event.target.value)
    }
    return (
    <>
        <form>
            <input type="text" placeholder="PlaceHolder" onChange={handleOnchange} />
            <input type="text" placeholder="PlaceHolder2" onChange={handleonChange2} />
        </form>
    </>
    )
}
