const initialBoard = {
	user: {
		first_name: "Alex",
		last_name: "Thomas",
		username: "Athomas05"
	},
	boards: [
		{
			board_title: "Board 1",
			board_id: 1,
			panels: [
				{
					panel_title: "Panel A",
					panel_ID: "1A",
					notes: [
						{
							note_ID: "1A-1",
							note:
								"ONE Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
						},
						{
							note_ID: "1A-2",
							note:
								" TWO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet risus vel felis vestibulum luctus. Maecenas ac ante commodo, tristique turpis a, faucibus orci. Proin ornare convallis tellus, eu consequat augue lobortis ut. Sed iaculis egestas elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
						},
						{
							note_ID: "1A-3",
							note:
								"THREE Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						}
					]
				},
				{
					panel_title: "Panel B",
					panel_ID: "1B",
					notes: [
						{
							note_ID: "1B-1",
							note:
								"ONE Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
						},
						{
							note_ID: "1B-2",
							note:
								"TWO ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
						}
					]
				}
			]
		},
		{
			board_title: "Board 2",
			board_id: 2,
			panels: [
				{
					panel_title: "Panel A of board 2",
					panel_ID: "2A",
					notes: [
						{
							note_ID: "2A-1",
							note:
								"ONE Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
						},
						{
							note_ID: "2A-2",
							note:
								" TWO Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet risus vel felis vestibulum luctus. Maecenas ac ante commodo, tristique turpis a, faucibus orci. Proin ornare convallis tellus, eu consequat augue lobortis ut. Sed iaculis egestas elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
						}
					]
				}
			]
		}
	]
};

export default initialBoard;
