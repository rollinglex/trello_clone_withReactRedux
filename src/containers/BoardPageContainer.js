import React, { Component } from "react";
import { connect } from "react-redux";
import HeaderContainer from "./HeaderContainer";
import BoardContainer from "./BoardContainer";
import Footer from "../components/Footer";

class BoardPageContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boardToShow: this.props.initialBoard
		};
	}
	boardToRender;
	handleSelect = id => {
		this.boardToRender = this.props.boards.filter(board => {
			return board.board_id === id;
		});
		console.log("setState", this.boardToRender[0].panels);
		this.setState({
			boardToShow: this.boardToRender[0]
		});
	};
	render() {
		console.log("inBoard Container", this.state.boardToShow.panels); //not updating
		console.log("AllBoards here", this.props.boards[0].panels); //updates
		return (
			<div className="boardPage">
				<HeaderContainer />
				<BoardContainer
					title={this.props.boards.board_title}
					handleSelect={id => this.handleSelect(id)}
					boardToShow={this.state.boardToShow}
				/>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		initialBoard: state.allBoards[0],
		boards: state.allBoards
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageContainer);
