import { combineReducers } from "redux";
import board from "./initialBoard";
import {
	BOARD_ON_TITLE,
	USER,
	RERENDER_BOARD,
	ADD_BOARD,
	ADD_PANEL,
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
function boardToShow(state = {}, action) {
	switch (action.type) {
		case BOARD_ON_TITLE:
			return action.data;
		case RERENDER_BOARD:
			return action.data;
		default:
			return state;
	}
}

//array of all boards
function allBoards(state = board.boards, action) {
	console.log("In Reducer", action.data);
	switch (action.type) {
		case ADD_BOARD:
			return action.data;
		case ADD_PANEL:
			return action.data;
		case ADD_NOTE:
			return state;
		default:
			return state;
	}
}

export const djelloApp = combineReducers({
	user,
	boardToShow,
	allBoards
});
