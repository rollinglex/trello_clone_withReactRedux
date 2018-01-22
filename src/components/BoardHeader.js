import React from "react";
import PropTypes from "prop-types";
import BoardSelectContainer from "../containers/BoardSelectContainer";
import AddNewBoardContainer from "../containers/AddNewBoardContainer";

const BoardHeader = ({ title, handleSelect }) => {
	return (
		<header className="board-header">
			<p>{title}</p>
			<div className="board-commands">
				<AddNewBoardContainer />
				<p>Delete board</p>
			</div>
			<BoardSelectContainer
				className="board-select"
				onSelect={id => handleSelect(id)}>
				Select board
			</BoardSelectContainer>
		</header>
	);
};

BoardHeader.propTypes = {};
export default BoardHeader;
