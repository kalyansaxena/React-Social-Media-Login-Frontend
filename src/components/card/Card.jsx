import React from 'react'
import { Link } from 'react-router-dom'
import "./card.scss"

function Card({ post }) {
    return (
        <div className="card">
            <span className="title">{post.title}</span>
            <img src={post.img} alt="postImage" className="img" />
            <p className="description">{post.desc}</p>
            <button className="cardButton"><Link to={`/post/${post.id}`} className="link">Read More</Link></button>

        </div>
    )
}

export default Card