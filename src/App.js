import React, { Component } from "react";
import HeaderContainer from "./containers/HeaderContainer";
import BoardContainer from "./containers/BoardContainer";
import Footer from "./components/Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<HeaderContainer />
				<BoardContainer />
				<Footer />
			</div>
		);
	}
}

export default App;

/******
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
