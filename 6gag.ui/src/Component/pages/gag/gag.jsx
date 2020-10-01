import React from 'react';
import './gag.css';
import Post from '../../post/post.jsx'
import { useParams } from 'react-router-dom';

function Gag(props) {
    let { id } = useParams();
    let post = props.posts.filter(post => post.id == id)[0];
    post.src = `../${post.src}`
    console.log(post);
  return (
    <div className="container">
      <div className="col-md-12 post-container">
        <Post post={post}></Post>
      </div>
    </div>
  );
}

export default Gag;