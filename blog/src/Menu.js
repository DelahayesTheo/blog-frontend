import React from 'react';
import {
  Link
} from 'react-router-dom'

class Menu extends React.Component {
	render() {
		return (
			<div className="menu row">
			<h4 className="col navbar-brand">The Otter Lord</h4>
			<ul className="col nav justify-content-end">
				<li className="nav-item"> 
			    <Link to="/" className="nav-link">Accueil</Link>
			  </li>
			  <li className="nav-item">  
			    <Link to="/blog" className="nav-link">Blog</Link>
			  </li>
			  <li className="nav-item"> 
			    <Link to="/portfolio" className="nav-link">Portfolio</Link>
			  </li>
			</ul>
			</div>
		)
	}
}

export default Menu;