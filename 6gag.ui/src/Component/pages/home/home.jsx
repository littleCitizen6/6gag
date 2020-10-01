import React from 'react';
import './home.css';
import PostsSection from '../../postsSection/postsSection.js'

function Home() {
  return (
    <div className="home">
      <PostsSection posts={[
        {id:1, title:"meme1", alt:"alt1", src:'./mockPosts/meme1.jpg'},
        {id:2, title:"meme2", alt:"alt2", src:'./mockPosts/meme2.jpg'},
        {id:3, title:"elon mask be like", alt:"alt3", src:'./mockPosts/meme3.png'},
        {id:4, title:"meme4", alt:"alt4", src:'./mockPosts/meme4.jpg'}
      ]}></PostsSection>
    </div>
  );
}

export default Home;