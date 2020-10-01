import React from 'react';
import './App.css';
import PostsSection from './Component/postsSection/postsSection.js'

function App() {
  return (
    <div className="App">
      <PostsSection posts={[
        {title:"meme1", alt:"alt1", src:'./mockPosts/meme1.jpg'},
        {title:"meme2", alt:"alt2", src:'./mockPosts/meme2.jpg'},
        {title:"elon mask be like", alt:"alt3", src:'./mockPosts/meme3.png'},
        {title:"meme4", alt:"alt4", src:'./mockPosts/meme4.jpg'}
      ]}></PostsSection>
    </div>
  );
}

export default App;
