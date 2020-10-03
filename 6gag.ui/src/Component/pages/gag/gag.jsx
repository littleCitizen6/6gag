import React, { useState } from 'react';
import './gag.css';
import Post from '../../post/post.jsx'
import { useParams } from 'react-router-dom';

function Gag(props) {
    let { id } = useParams();
  return (
    <div className="container">
      <div className="col-md-12 post-container">
        <Post id={id}></Post>
      </div>
    </div>
  );
}

export default Gag;