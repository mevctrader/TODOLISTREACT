import React from "react";
import ToDo from "./todo.jsx";
import "../../styles/index.css"

//create your first component
const Home = () => {
	return (
		<div className="container text-center bg-image" id="div1">
			<ToDo/>
		</div>
	);
};

export default Home;