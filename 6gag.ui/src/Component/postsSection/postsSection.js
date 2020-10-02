import React, {Component, useState} from 'react';
import Post from '../post/post';
import './postsSection.css';
import axios from 'axios';

function PostsSection(props) {

        const [posts, setPosts] = useState([]);
        axios.get('http://localhost:3001/gag').then(res =>{
        setPosts(res.data);
     })
        return(
            <div className="container post-section">
                {posts.map(item =>
                    <div className="col-md-10 post-container">
                        <Post post={item}></Post>
                    </div>
                )}
            </div>
        )
}

export default PostsSection;