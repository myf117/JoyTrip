import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";
import Main from "./view.login.js";
import adminer from "./adminer/adminer.js";
import mainpage from "./mainpage/mainpage.js"
const myHistory = createHashHistory();
export default class App extends React.Component {
	
	render() {
		return (
			<div>
				<Router history={myHistory}>
				<Route exact={true} path="/" component={Main} />
				<Route   path="/First" component={mainpage} /> 
				
			</Router>
			</div>
		);
	}
}

