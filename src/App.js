import logo from './logo.svg';
import './App.css';
import Postcard from "./Components/postCard"
import React, { useState, useEffect, Component } from 'react';
import {URL} from "./URLs.js"

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(response => setPosts(response.sort((a,b) => b.likecount - a.likecount)))
  }, []);

  const handleVote = (e) => {

    let currentPost = posts.find(post => post.id == e.target.id)

    if (e.target.className == "upvote") currentPost.likecount += 1
    if (e.target.className == "downvote") currentPost.likecount -= 1
    
    let currentPostIndex = posts.findIndex(post => post.id == e.target.id)
    let tempPosts = [...posts]
    tempPosts[currentPostIndex] = currentPost
    setPosts(tempPosts)
   
    
    fetch(`http://localhost:3000/posts/${e.target.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
          likecount: currentPost.likecount 
      })
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }




  return (
    <div className="App">
        {posts.map(post => <Postcard key={post.id} post={post} handleVote={handleVote}/>)}
    </div>
  );
}

export default App;
