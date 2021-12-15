export const needListReducer = (state = { needs: [] }, action) => {
	switch (action.type) {
		case 'NEED_LIST_REQUEST':
			return { loading: true, needs: [] };

		case 'NEED_LIST_SUCCESS':
			return { loading: false, needs: action.payload };

		case 'NEED_LIST_FAIL':
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
