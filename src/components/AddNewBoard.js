import React from "react";
import PropTypes from "prop-types";

const AddNewBoard = ({
	newTitle,
	handleValueChange,
	addBoard,
	handleClose,
	resetForm
}) => {
	return (
		<div className="AddNewBoard-wrapper">
			<input
				type="text"
				value={newTitle}
				onChange={e => handleValueChange(e)}
			/>
			<button
				className="addBoardBtn"
				onClick={() => {
					addBoard(newTitle);
					resetForm();
				}}>
				{" "}
				&#10010;
			</button>
			<button
				className="closeAddBtn"
				onClick={() => {
					handleClose();
					resetForm();
				}}>
				&#9747;
			</button>
		</div>
	);
};

AddNewBoard.propTypes = {};
export default AddNewBoard;
