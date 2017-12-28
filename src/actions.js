export const SAMPLE = "SAMPLE";
export const USER = "USER";
export const BOARD_TO_SHOW = "BOARD_TO_SHOW";
export function sample(data) {
	return {
		type: SAMPLE,
		data
	};
}

export function user(data) {
	return {
		type: USER,
		data
	};
}

export function board(data) {
	return {
		type: BOARD_TO_SHOW,
		data
	};
}
