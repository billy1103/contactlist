import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Add a new contact</h1>
			<form>
				<div>
					<label>
						Full Name
						<input
							placeholder="Full Name" />
					</label>
				</div>
				<div>
					<label>
						Email
						<input
							placeholder="Enter email" />
					</label>
				</div>
				<div>
					<label>
						Phone
						<input
							placeholder="Enter phone" />
					</label>
				</div>
				<div>
					<label>
						Address
						<input
							placeholder="Enter address" />
					</label>
				</div>
				<button>save</button>
			</form>
			{/* <ul className="list-group">
				{store.list.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
							
						</li>
					);
				})}
			</ul> */}

			<Link to="/">
				<button className="btn btn-primary">or get back to contacts</button>
			</Link>
		</div>
	);
};
