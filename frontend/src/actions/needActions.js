import axios from 'axios';
import {
	NEED_LIST_REQUEST,
	NEED_LIST_SUCCESS,
	NEED_LIST_FAIL,
} from '../constants/needConstants';

const listNeeds = () => async (dispatch) => {
	try {
		dispatch({ type: NEED_LIST_REQUEST });

		const { data } = await axios.get('/api/needs/');

		dispatch({
			type: NEED_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NEED_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
