import React from "react";
import PropTypes from "prop-types";

const AddNewBoard = props => {
	return (
		<div className="AddNewBoard-wrapper">
			<input
				type="text"
				value={props.newBoardTitle}
				onChange={e => props.handleValueChange(e)}
			/>
			<button className="addBtn"> &#9998;</button>
			<button className="closeAddBtn" onClick={props.handleClick}>
				&#9747;
			</button>
		</div>
	);
};

AddNewBoard.propTypes = {};
export default AddNewBoard;
