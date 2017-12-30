import { combineReducers } from "redux";
import update from "immutability-helper";
import board from "./initialBoard";
import { BOARD_TO_SHOW, USER, ADD_NOTE, SAMPLE } from "./actions";

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
	sample,
	user,
	boardToShow,
	allBoards
});
