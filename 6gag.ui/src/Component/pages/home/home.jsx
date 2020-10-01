import React from 'react';
import './home.css';
import PostsSection from '../../postsSection/postsSection.js'

function Home(props) {
  return (
    <div className="home">
      <PostsSection posts={props.posts}></PostsSection>
    </div>
  );
}

export default Home;