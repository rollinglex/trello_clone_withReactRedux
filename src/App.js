import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, Switch, Link } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import BoardPageContainer from "./containers/BoardPageContainer";

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route
				exact
				path="/"
				render={() => {
					return <LoginContainer />;
				}}
			/>
			<Route path="/board" component={BoardPageContainer} />
		</Switch>
	</BrowserRouter>
);

export default App;

/******
//test


object schema

User: {
username: "Alex",
boards: [
	{
	boardTitle: "BoardA",
	panels: [
		{
		panelTitle: PanelOne,
		notes: ["Do this", "then that", "finish and done"]
		}
	]

	}
]
}



***/
