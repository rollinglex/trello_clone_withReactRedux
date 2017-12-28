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

function boardToSHow(state = board.boards[0], action) {
	switch (action.type) {
		default:
			return state;
	}
}

export const djelloApp = combineReducers({
	sample,
	user,
	boardToSHow
});
