import React from 'react';
import './ReactFeed.css'
import Post from './Post'
import {posts} from './posts'

function App() {
  const postsComponents = posts.map((post) => {
    return (<Post
      likes = {post.likes}
      name = {post.name}
      text = {post.text}
      image = {post.image}/>);
    
  });

  return (
    <div className = "container">
      <h1>React Feed</h1>
      <h2>Recent posts</h2>

      <div className="posts">
        {postsComponents}
      </div>
    </div>
  );
}

export default App;
