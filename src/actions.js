import board from "./initialBoard";
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

//gets proper board based on board title passed in
//data coming in is the board_title in board object
//board imported is replicating data from database
export function boards(data) {
	let selectedBoard = board.boards.filter(board => board.board_title === data);
	return {
		type: BOARD_TO_SHOW,
		data: selectedBoard[0]
	};
}
