import { combineReducers } from "redux";
import board from "./initialBoard";
import {
	INITIAL_BOARD,
	BOARD_ON_TITLE,
	USER,
	ADD_BOARD,
	ADD_NOTE
} from "./actions";

//replicates data coming in when user logs in
//let initialUserState =

function user(state = {}, action) {
	switch (action.type) {
		case USER:
			return action.data;
		default:
			return state;
	}
}

//board on display
function boardToShow(state = board, action) {
	console.log("In Reducer", action.data);
	switch (action.type) {
		case BOARD_ON_TITLE:
			return action.data;

		default:
			return state;
	}
}

//array of all boards
function allBoards(state = board.boards, action) {
	switch (action.type) {
		case ADD_BOARD:
			return action.data;
		case ADD_NOTE:
			return state;
		default:
			return state;
	}
}

//add new note
function addNote(state = "", action) {
	switch (action.type) {
	}
}

export const djelloApp = combineReducers({
	user,
	boardToShow,
	allBoards
});
