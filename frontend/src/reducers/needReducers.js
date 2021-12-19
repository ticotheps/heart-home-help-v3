import {
	NEED_LIST_REQUEST,
	NEED_LIST_SUCCESS,
	NEED_LIST_FAIL,
	NEED_DETAILS_REQUEST,
	NEED_DETAILS_SUCCESS,
	NEED_DETAILS_FAIL,
} from '../constants/needConstants';

export const needListReducer = (state = { needs: [] }, action) => {
	switch (action.type) {
		case NEED_LIST_REQUEST:
			return { loading: true, needs: [] };

		case NEED_LIST_SUCCESS:
			return { loading: false, needs: action.payload };

		case NEED_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const needDetailsReducer = (
	state = { need: { reviews: [] } },
	action
) => {
	switch (action.type) {
		case NEED_DETAILS_REQUEST:
			return { loading: true, ...state };

		case NEED_DETAILS_SUCCESS:
			return { loading: false, need: action.payload };

		case NEED_DETAILS_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
