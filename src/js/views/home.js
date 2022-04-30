import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { People } from "../component/contacts";

export const Home = () => {
	return (
		<nav className="mb-3">
			<div className="ml-auto">
				<People />
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
				</Link>
				<ul>
					<li>
						<img />
						<div>
							<p>name</p>
							<p>address</p>
							<p>number</p>
							<p>email</p>
						</div>
						<div>
							<span>edit</span>
							<span>erase</span>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}