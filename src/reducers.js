import { combineReducers } from "redux";
import board from "./initialBoard";
import { BOARD_TO_SHOW, USER, SAMPLE } from "./actions";

function sample(state = {}, action) {
	switch (action.type) {
		case SAMPLE:
			return action.data;
		default:
			return state;
	}
}

//replicates data coming in when user logs in
let initialUserState = {
	username: board.user.username,
	first_name: board.user.first_name,
	last_name: board.user.last_name
};

function user(state = initialUserState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

//board on display
function boardToShow(state = board.boards[0], action) {
	switch (action.type) {
		case BOARD_TO_SHOW:
			return action.data;
		default:
			return state;
	}
}

//array of all boards
function allBoards(state = board.boards, action) {
	switch (action.type) {
		default:
			return state;
	}
}
export const djelloApp = combineReducers({
	sample,
	user,
	boardToShow,
	allBoards
});
