import React from "react";


function Postcard(props){
    return(
        <div>
            <p id={props.post.id}> {props.post.title} {props.post.body} {props.post.likecount} </p>
            <button id={props.post.id} className="upvote" onClick={props.handleVote}>Upvote here!</button>
            <button id={props.post.id} className="downvote"onClick={props.handleVote}>Downvote here!</button>
        </div>
    )
  }

  export default Postcard; 