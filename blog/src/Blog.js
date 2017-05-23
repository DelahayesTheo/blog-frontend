import React, { Component } from 'react';

import Post from './Post';

import './style/css/main.css';

class Blog extends Component {

  state = {
   posts: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/posts', {
      method : "GET",
    })
      .then(result=> {
        return result.json();
      })
      .then(value=> {
         this.setState({posts : value['hydra:member']});
      });
  }

  render() {
    const blogPosts = Object
      .keys(this.state.posts)
      .map(key => 
        <Post key={key} detailPost={this.state.posts[key]} />);

    return (
      <div className="container">
        
        <div className="section-post">
          <div className="titre-section-post">
            <h3>Article de veille :</h3>
          </div>
          <div className="row">
          {blogPosts}
        </div> 
      </div>
       
      </div>
    );
  }
}
export default Blog;
