import React from 'react';

import './style/css/notFound.css';

const NotFound = () => {
	return (
		<table className="notFoundTable">
		  <tbody>
		    <tr>
		      <td className="d-flex justify-content-center">
		      	<div className="d-flex">
		     	 <img src={require('./img/thumbsup.jpg')} alt="YES" className="col img-fluid" />
		     	</div>
		      </td>
		    </tr>
		    <tr>
		      <td className="d-flex justify-content-center">
		      	<div className="d-flex">
		     	 <h2 className="center">Quand tu te dis que tu vas faire ton site à l'avance pour être bien préparé mais qu'au final 
		     	 <br />
		     	 tu le fais la veille de l'épreuve du début du code à l'achat et configuration du vps.
		     	 </h2>
		     	</div>
		      </td>
		    </tr>
		  </tbody>
		</table>
	)
}

export default NotFound;