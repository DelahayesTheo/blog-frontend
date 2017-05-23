import React from 'react';

import './style/css/notFound.css';

const NotFound = () => {
	return (
		<table className="notFoundTable">
		  <tbody>
		    <tr>
		      <td className="d-flex justify-content-center">
		      	<div className="d-flex">
		     	 <img src={require('./img/Shocked.jpg')} alt="Oh No" className="col img-fluid" />
		     	</div>
		      </td>
		    </tr>
		    <tr>
		      <td className="d-flex justify-content-center">
		      	<div className="d-flex">
		     	 <h1>Erreur 404</h1>
		     	</div>
		      </td>
		    </tr>
		  </tbody>
		</table>
	)
}

export default NotFound;