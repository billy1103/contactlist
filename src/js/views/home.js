import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<nav className="mb-3">
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
}