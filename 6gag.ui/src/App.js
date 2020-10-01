import React from 'react';
import './App.css';
import Home from './Component/pages/home/home.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home posts={[
        {id:1, title:"meme1", alt:"alt1", src:'./mockPosts/meme1.jpg'},
        {id:2, title:"meme2", alt:"alt2", src:'./mockPosts/meme2.jpg'},
        {id:3, title:"elon mask be like", alt:"alt3", src:'./mockPosts/meme3.png'},
        {id:4, title:"meme4", alt:"alt4", src:'./mockPosts/meme4.jpg'}
      ]}/>
        </Route>
        <Route path="/post/:id">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
