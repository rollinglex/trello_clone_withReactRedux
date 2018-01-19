import board from "./initialBoard";
export const USER = "USER";
export const BOARD_ON_TITLE = "BOARD_ON_TITLE";
export const NOTE_VALUE = "NOTE_VALUE";
export const ADD_NOTE = "ADD_NOTE";
export const INITIAL_BOARD = "INITIAL_BOARD";
export const ADD_BOARD = "ADD_BOARD";
export const ADD_PANEL = "ADD_PANEL";
export const RERENDER_BOARD = "RERENDER_BOARD";

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
	let selectedBoard = boards.filter(board => board.board_title === data);
	console.log("NEW BOARD");
	return {
		type: BOARD_ON_TITLE,
		data: selectedBoard[0]
	};
}
export function rerenderBoardShown(id, allBoards) {
	console.log("in Action:", allBoards);
	let selectedBoard = allBoards.filter(board => board.board_id === id);
	return {
		type: RERENDER_BOARD,
		data: selectedBoard[0]
	};
}
//board object used when adding new boards
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
	console.log("Adding new Board");
	return {
		type: ADD_BOARD,
		data: newBoard(newTitle, boards)
	};
}
function newPanel(newTitle, board_id, allBoards) {
	return allBoards.map((board, i) => {
		//console.log("in panel function", allBoards);
		if (board.board_id === board_id) {
			return {
				...board,
				panels: [
					...board.panels,
					{
						panel_title: newTitle,
						panel_ID: `${newTitle}-${i}`,
						notes: [
							{
								note_ID: "1A-1",
								note: ""
							}
						]
					}
				]
			};
		}
		return board;
	});
}
export function addPanel(newTitle, board_id, allBoards) {
	console.log("action returns", newPanel(newTitle, board_id, allBoards));
	return {
		type: ADD_PANEL,
		data: newPanel(newTitle, board_id, allBoards)
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
	console.log("logged in", board.boards);
	getBoardOnTitle(board.boards[0].board_title);
}
