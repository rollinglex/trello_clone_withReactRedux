import { combineReducers } from "redux";
import board from "./initialBoard";
import {
	INITIAL_BOARD,
	BOARD_TO_SHOW,
	USER,
	ADD_NOTE,
	SAMPLE
} from "./actions";

function sample(state = {}, action) {
	switch (action.type) {
		case SAMPLE:
			return action.data;
		default:
			return state;
	}
}

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
	console.log("In Reducer", action.data);
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
