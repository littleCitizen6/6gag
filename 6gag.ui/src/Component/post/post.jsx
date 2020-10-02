import React, { useState } from 'react';
import {Card} from "react-bootstrap";
import './post.css';
import { Link } from "react-router-dom";
import {uuid} from 'uuidv4';

function Post(props) {
    const [post, setPost] = useState({
        id:uuid(),
        title:"", 
        alt:"Loading...",
        src:""});
     var propPost = props.post || null;
     if(propPost) {
         setPost(propPost);
     }
     else{
        axios.get(`http://localhost:3001/gag/${props.id}`).then(res =>{
        setPost(res.data);
     })
    }
        return(
            <Link to={`/post/${post.id}`}>
            <div className="post" id={post.id}>
                <div className="post-header">
                    <span className="post-title">{post.title}</span>
                </div>
                <div>
                    <Card>
                        <Card.Img src={post.src} alt={post.alt} />
                    </Card>
                </div>
            </div>
            </Link>
        );
    
}
export default Post;