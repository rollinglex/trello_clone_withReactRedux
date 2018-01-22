import { combineReducers } from "redux";
import board from "./initialBoard";
import { USER, ADD_BOARD, ADD_PANEL, ADD_NOTE } from "./actions";

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

const initialboardState = {};

//array of all boards
function allBoards(state = board.boards, action) {
	console.log("All Boards Reducer", action.data);

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
	allBoards
});
