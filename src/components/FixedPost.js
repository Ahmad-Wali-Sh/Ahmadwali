import React from "react"
import { Link } from "react-router-dom"

export default function FixedPost (props) {
    
    return (
        <div className="post">
            <h1>{props.name} {props.lastname}</h1>
            <h2>Score: {props.score}</h2>
            <h3>Status: {props.status}</h3>
            <h3>Email: {props.email}</h3>
            <Link to="/"><h6>Go Back</h6></Link>
        </div>
    )
}