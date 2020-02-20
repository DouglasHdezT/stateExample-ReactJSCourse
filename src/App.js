import React, {Component} from 'react';
import './ReactFeed.css'
import Post from './Post'
import {posts} from './posts'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: posts,
    }
  }

  likeHandler = index => {
    let postsAux = [...this.state.posts];

    postsAux[index].likes += 1;

    this.setState({
      posts: postsAux,
    })
  }
  
  render(){
    const postsComponents = this.state.posts.map((post, index) => {
      return (<Post
        key = {index}
        likes = {post.likes}
        name = {post.name}
        text = {post.text}
        image = {post.image}
        onClick = {()=> this.likeHandler(index)}
        />);
      
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
}

export default App;
