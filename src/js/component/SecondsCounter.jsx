import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from '@fortawesome/free-solid-svg-icons';

//create your first component
const SecondsCounter = (props) => {
	return (
		<div className="container-fluid">
			<div className="row bg-dark text-light text-center align-content-center" style={{height:90}}>
				<p className="col-lg-1"></p>
				<p className="col-lg-1"></p>
				<p className="col-lg-1"></p>
				<p className="col-lg-1 display-5 m-0"><FontAwesomeIcon icon = {faClock} /></p>
				<p className="col-lg-1 display-5 m-0">{props.segundos6}</p>
				<p className="col-lg-1 display-5 m-0">{props.segundos5}</p>
				<p className="col-lg-1 display-5 m-0">{props.segundos4}</p>
				<p className="col-lg-1 display-5 m-0">{props.segundos3}</p>
				<p className="col-lg-1 display-5 m-0">{props.segundos2}</p>
				<p className="col-lg-1 display-5 m-0">{props.segundos}</p>
				<p className="col-lg-1"></p>
				<p className="col-lg-1"></p>
			</div>
		</div>
	);
};

export default SecondsCounter;
