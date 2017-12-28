import React from "react";
import PropTypes from "prop-types";

const BoardHeader = ({ boardTitle }) => {
	return (
		<header className="board-header">
			<p>{boardTitle}</p>
			<div className="board-commands">
				<p>delete board</p>
				<p>New Board</p>
			</div>
			<div className="switch-boards">
				<p>Switch Boards</p>
			</div>
		</header>
	);
};

BoardHeader.propTypes = {};
export default BoardHeader;
