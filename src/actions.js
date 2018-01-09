import board from "./initialBoard";
export const USER = "USER";
export const BOARD_ON_TITLE = "BOARD_ON_TITLE";
export const NOTE_VALUE = "NOTE_VALUE";
export const ADD_NOTE = "ADD_NOTE";
export const INITIAL_BOARD = "INITIAL_BOARD";
export const ADD_BOARD = "ADD_BOARD";

export function user(data) {
	return {
		type: USER,
		data: data
	};
}

//gets proper board based on board title passed in
//data coming in is the board_title in board object
//selectedBoard finds proper board and returns and array of 1.
//board imported is replicating data from database
export function getBoardOnTitle(data, boards = board.boards) {
	console.log("in Action:", data);
	console.log("in Action2:", boards);
	console.log("in Action initial:", board);
	let selectedBoard = boards.filter(board => board.board_title === data);
	return {
		type: BOARD_ON_TITLE,
		data: selectedBoard[0]
	};
}

function newBoard(newTitle, boards) {
	return [
		...boards,
		{
			board_title: newTitle,
			board_id: `${newTitle}-1`,
			panels: [
				{
					panel_title: "Panel title",
					panel_ID: "1A",
					notes: [
						{
							note_ID: "1A-1",
							note: " "
						}
					]
				}
			]
		}
	];
}

//Adds new board with new title
export function addBoard(newTitle, boards) {
	return {
		type: ADD_BOARD,
		data: newBoard(newTitle, boards)
	};
}

//receives new note and adds to proper panel and board
export function addNote(data, id) {
	// let selectProperPanel = board.boards.panel.map((panel, i) => {
	// 	if (panel.panel_ID === id) {
	// 		return panel.notes.concat({
	// 			note_ID: `${panel.panel_ID}-${i}`,
	// 			note: data
	// 		});
	// 	} else {
	// 		return panel;
	// 	}
	// });
	return {
		type: ADD_NOTE,
		data
	};
}

export function login() {
	getBoardOnTitle(board.boards[0].board_title);
}
