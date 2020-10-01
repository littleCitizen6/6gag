import React from 'react';
import {Card} from "react-bootstrap";
import './post.css';

function Post(props) {
        return(
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
        );
    
}
export default Post;