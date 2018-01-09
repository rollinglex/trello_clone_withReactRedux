import React from "react";
import PropTypes from "prop-types";

const AddNewBoard = ({
	newBoardTitle,
	handleValueChange,
	addBoard,
	handleClose,
	resetState
}) => {
	console.log(handleClose);
	return (
		<div className="AddNewBoard-wrapper">
			<input
				type="text"
				value={newBoardTitle}
				onChange={e => handleValueChange(e)}
			/>
			<button className="addBtn" onClick={newBoardTitle => addBoard()}>
				{" "}
				&#9998;
			</button>
			<button
				className="closeAddBtn"
				onClick={() => {
					handleClose();
					resetState();
				}}>
				&#9747;
			</button>
		</div>
	);
};

AddNewBoard.propTypes = {};
export default AddNewBoard;
