import React from 'react';
import './style/css/onePost.css';
import {
  Link
} from 'react-router-dom';


class OnePost extends React.Component {
	state = {
   		post: {}
  	}

    componentDidMount() {
	    fetch('http://localhost:8000/posts/'+this.props.match.params.id, {
	      method : "GET",
	    })
	      .then(result=> {
	        return result.json();
	      })
	      .then(value=> {
	      	console.log(value);
	        this.setState({ post : value});
	      });
    }

	render() {
		return (
			<div className="container">
		       	<div className="section-post row">
		          <div className="titre-section-post col col-12 d-flex justify-content-center">
		            <h3>{this.state.post.title}</h3>
		          </div>
		          <div className="col push-3 col-6 d-flex justify-content-center post-content post-content">
		          	{this.state.post.content}
		          </div>
		          <div className="d-flex justify-content-center col col-12 ">
		          		<Link className="center linkBack" to="/blog">Retour à la liste de news</Link>
		          </div>
		     	</div>      
      	 	</div>
		)
	}
}

export default OnePost;