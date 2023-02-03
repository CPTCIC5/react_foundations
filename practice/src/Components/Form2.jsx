import React,{useState} from 'react'

export default function Form2() {

    const [data,setData]=useState({firstName:"",lastName:"",checked:true})

    function handleChange(event) {
        setData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.type === "checkbox" ? event.target :event.target.value
            }
        })
    }
    console.log(data)

    return (
    <>
        <form>
            <input type="text" placeholder="PlaceHolder123" value={data.firstName} name="firstName" onChange={handleChange} />
            <input type="text" placeholder="PlaceHolder234" value={data.lastName} name="lastName" onChange={handleChange} />
            <input
                        id="okayToEmail"
                        type="checkbox"
                        name="checked"
                        onChange={handleChange}
                        checked={data.checked}
                    />
        </form>
    </>
    )
}
