import React from 'react'
import {Link} from 'react-router-dom'
import '../Header.css';
export default function Chat({name,message,timestamp,profilepic}) {
    return (
       <Link to={`/chat/${name}`}>
        <div className="chat">

            <img src={profilepic} alt={name} className="Chat_images chatcustom"/>
       
 

        <div className="chat_details">
        <h2>{name}</h2>
        <p>{message}</p>
        </div>

        <p className="chat_timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}
