import React from "react"
import Header from "./myComponents/Header"
import Content from "./myComponents/Content"
import data from "./data"


export default function App() {
        return (
        <>
        <Content data={data}/>
        <Header/>
        </>
        )
}
