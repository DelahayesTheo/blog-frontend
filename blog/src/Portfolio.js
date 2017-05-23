import React from 'react';
import PortfolioEntry from './PortfolioEntry';


import './style/css/main.css';


class Portfolio extends React.Component {
  state = {
   portfolios: []
  }

  componentDidMount() {
    fetch('http://localhost:8000/portfolios', {
      method : "GET",
    })
      .then(result=> {
        return result.json();
      })
      .then(value=> {
         this.setState({portfolios : value['hydra:member']});
      });
  }

	render () {
		const portfolioEntries = Object
      		.keys(this.state.portfolios)
      		.map(key => 
        		<PortfolioEntry key={key} detailEntry={this.state.portfolios[key]} />);

		return (
			<div className="container">
				<div className="section-post">
	          		<div className="titre-section-post">
	            		<h3>Portfolio :</h3>
	          		</div>
	          		<div className="row">
	          			{portfolioEntries}
	        		</div> 
      			</div>
			</div>
		)
	}
}

export default Portfolio;