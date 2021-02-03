import React from "react";
import '../App.css';

function Postcard(props){
    return(
        <div className="postcard">
            <div className="vote-div">
                <img style={{width: "80%", marginTop:"50%"}} className={"thumbsup"} src="https://www.flaticon.com/svg/vstatic/svg/1533/1533908.svg?token=exp=1612147425~hmac=b72d94a00abf1330cca8516f1377c6e4" id={props.post.id} className="upvote" onClick={props.handleVote}/>
                <p> {props.post.likecount}</p>
                <img style={{width: "80%"}} className={"thumbsdown"} src="https://www.flaticon.com/svg/vstatic/svg/1533/1533914.svg?token=exp=1612147251~hmac=5cf55c5e871148e8a5da1cebd84e418c"id={props.post.id} className="downvote"onClick={props.handleVote}/>
            </div>
            <div className="table-cell">                
                <div className="content-div">
                    <p id={props.post.id}> Posted by u/{props.post.user.username}  on {props.post.user.created_at}</p>
                    <h1> {props.post.title}  </h1>
                    <p> {props.post.body}</p>
                </div>
            </div>
        </div>
    )
  }

  export default Postcard; 