import React from "react"

export default function Card(props) {
       
    return (
        <div className="card">
            <img src={`../images/${props.imageUrl}`} className="card--image" />
            <div className="card--info">
                <img src="../images/map.jpg" className="card--map" />
                <span className="gray">{props.location}</span>
                <a href="props.googleMapUrl" className="gray">{props.googleMapUrl}</a>
                <h1>{props.title}</h1>
                <div className="date">
                    <h4>{props.startDate}</h4>
                    <h4>{props.endDate}</h4>
                </div>
                <p className="gray">{props.description}</p> 
            </div>
        </div>
    )
}