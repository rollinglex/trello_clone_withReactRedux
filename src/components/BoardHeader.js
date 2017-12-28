import React from "react";
import PropTypes from "prop-types";
import BoardSelectContainer from "../containers/BoardSelectContainer";
const BoardHeader = ({ boardTitle }) => {
	return (
		<header className="board-header">
			<p>{boardTitle}</p>
			<div className="board-commands">
				<p>delete board</p>
				<p>New Board</p>
			</div>
			<BoardSelectContainer className="board-select">
				Select board
			</BoardSelectContainer>
		</header>
	);
};

BoardHeader.propTypes = {};
export default BoardHeader;
