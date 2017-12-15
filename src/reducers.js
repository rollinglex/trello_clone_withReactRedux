import { combineReducers } from "redux";

import { SAMPLE } from "./actions";

function sample(state = {}, action) {
	switch (action.type) {
		case SAMPLE:
			return action.data;
		default:
			return state;
	}
}

export const djelloApp = combineReducers({
	sample
});
