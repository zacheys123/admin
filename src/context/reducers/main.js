export const main_reducer = (state = {}, action) => {
	switch (action.type) {
		case 'THEME':
			return {
				...state,
				istheme: !action.payload,
			};

		default:
			return {
				...state,
			};
	}
};
