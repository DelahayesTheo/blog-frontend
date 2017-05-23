import React from 'react';
import {
  Link
} from 'react-router-dom';

const pathToRightImg = require.context('./img', true);

class Post extends React.Component {
	

	defineImg = () => {
		var imgPath ="";

		switch(this.props.detailPost.type) {
			case 'Responsive Design':
				imgPath += 'RD.png';
				break;
			case 'JavaScript':
				imgPath += 'JS.png';
				break;
			default:
				imgPath += 'Misc.png';
		}

		return imgPath;
	};

	render() {
		return (
			<Link to={"/blog/" + this.props.detailPost.id} className="post col col-lg-3 col-md-4 col-sm-12">
			<div >
				<img className="img-fluid" src={require("./img/" +this.defineImg())} alt="Oh No"/>
				<h5 className="post-title">{this.props.detailPost.title}</h5>
				<h6 className="badge badge-default">{this.props.detailPost.type}</h6>
			</div>
			</Link>
		)
	}
}

export default Post;