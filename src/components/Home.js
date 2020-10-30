import React, { useState } from "react";
import axios from 'axios'
import Quiz from "./Quiz";
import logo from "../logo.svg";

// import Result from "./Result";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
	const [finish, setFinish] = useState(false);
	const [result, setResult] = useState(0);

	const getApi = () => {
		setFinish(false)	
		axios
			.get(
				"https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
			)
			// .then((res) => setQuestions(res.data.results))
			// .catch((err) => console.log(err));
	};

	if (finish) {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-10">
						<h2>Result : {result}</h2>
					    <button className="btn btn-warning" onClick={()=>getApi()}>Play again</button>
					</div>

				</div>
			</div>
		)
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card text-secondary  bg-light mb-3 shadow border-black rounded">
						<div className="card-header bg-secondary">

							<img src={logo} className="App-logo" alt="logo" />
							<h2 className="text-warning float-right m-5">Welcome To The Home of React Quiz</h2>
						</div>
						<Quiz onResult={(result) => setResult(result)} onFinish={(finish) => setFinish(finish)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
