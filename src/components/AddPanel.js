import React from "react";
import PropTypes from "prop-types";

const AddPanel = ({
	handleValueChange,
	handleClose,
	addPanel,
	title,
	boardId,
	allBoards,
	boardTitle,
	resetForm
}) => {
	return (
		<div className="add-panel-container">
			<input type="text" value={title} onChange={e => handleValueChange(e)} />
			<button
				className="addPanelBtn"
				onClick={() => {
					addPanel(title, boardId, allBoards, boardTitle);

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

AddPanel.propTypes = {};
export default AddPanel;
