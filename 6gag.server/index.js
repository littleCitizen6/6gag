const uuid = require('uuid');
const express = require('express');
const app = express();

var posts = [
    {id:uuid.v4(), title:"meme1", alt:"alt1", src:'./mockPosts/meme1.jpg'},
    {id:uuid.v4(), title:"meme2", alt:"alt2", src:'./mockPosts/meme2.jpg'},
    {id:uuid.v4(), title:"elon mask be like", alt:"alt3", src:'./mockPosts/meme3.png'},
    {id:uuid.v4(), title:"meme4", alt:"alt4", src:'./mockPosts/meme4.jpg'}
  ];

app.get('/gag', (req, res) =>{
    res.status(200).send(posts);
});

app.get('/gag/:id', (req, res) =>{
    let id = req.params.id;
    let post = posts.filter(post => post.id == id)[0];
    res.status(200).send(post);
});

app.listen(3001, () => console.log('Listening to port 3001'))