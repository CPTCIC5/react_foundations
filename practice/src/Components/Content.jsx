import React from 'react'

export default function Content() {
    let data=[
        {
            sno:1,
            name:"aryan",
            active:true
        },
        {
            sno:2,
            name:"aryanjain",
            active:true

        }
    ]
    return (
        <>
        {data.map((obj) =>{
            return (
                <>
                {obj.sno} <br />
                {obj.name} <br />
                </>
            )
        } )}
        </>
    )
}
