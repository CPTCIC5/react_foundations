import React from "react"

export default function Content(props) {        
    return (
        <>
        {props.data.map((obj) => {
            return (  
            <div className="card">
            <img src={`../images/${obj.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{obj.rating}</span>
                <span className="gray">({obj.reviewCount}) • </span>
                <span className="gray">{obj.location}</span>
            </div>
            <p>{obj.title}</p>
            <p><span className="bold">From ${obj.price}</span> / person</p>
        </div>
        )})}
        </>
    )
}