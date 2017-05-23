import React from 'react';

class PortfolioEntry extends React.Component {
	render () {
		return (
			<div className="col col-12 portfolio">
				<h4 className="portfolio-title"> { this.props.detailEntry.title } </h4>
				<h6 className="portfolio-langage"> langage prédominant : { this.props.detailEntry.langage } </h6>
				<div className="d-flex justify-content-center post-content post-content">
		          	{ this.props.detailEntry.description }
		        </div>
		        <a href={this.props.detailEntry.link}>{this.props.detailEntry.link}</a>
			</div>
			
		)		
	}
}

export default PortfolioEntry;