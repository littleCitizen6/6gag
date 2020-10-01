import React from 'react';
import {Card} from "react-bootstrap";
import './post.css';
import { Link } from "react-router-dom";

function Post(props) {
        return(
            <Link to={`/post/${props.post.id}`}>
            <div className="post" id={props.post.id}>
                <div className="post-header">
                    <span className="post-title">{props.post.title}</span>
                </div>
                <div>
                    <Card>
                        <Card.Img src={props.post.src} alt={props.post.alt} />
                    </Card>
                </div>
            </div>
            </Link>
        );
    
}
export default Post;