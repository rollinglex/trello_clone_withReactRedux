import React from "react";
import PropTypes from "prop-types";
import BoardSelectContainer from "../containers/BoardSelectContainer";
import AddNewBoardContainer from "../containers/AddNewBoardContainer";

const BoardHeader = ({ boardTitle }) => {
	return (
		<header className="board-header">
			<p>{boardTitle}</p>
			<div className="board-commands">
				<AddNewBoardContainer />
				<p>delete board</p>
			</div>
			<BoardSelectContainer className="board-select">
				Select board
			</BoardSelectContainer>
		</header>
	);
};

BoardHeader.propTypes = {};
export default BoardHeader;
