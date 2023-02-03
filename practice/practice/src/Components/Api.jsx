import React,{useState} from 'react'

export default function Api() {
    const [apidata,setApiData]=useState({})
    /*
    fetch("https://swapi.dev/api/people/1")
    .then(res =>res.json())
    .then(data => setApiData(data))*/
    React.useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
        .then(res =>res.json())
        .then(data => setApiData(data))
    },[]) // this [] defines when useEffect will trigger
    return (
        <div>
        <pre>{JSON.stringify(apidata, null, 2)}</pre>
    </div>
    )
}
