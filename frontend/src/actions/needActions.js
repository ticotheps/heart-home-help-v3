import axios from 'axios';
import {
	NEED_LIST_REQUEST,
	NEED_LIST_SUCCESS,
	NEED_LIST_FAIL,
	NEED_DETAILS_REQUEST,
	NEED_DETAILS_SUCCESS,
	NEED_DETAILS_FAIL,
} from '../constants/needConstants';

export const listNeeds = () => async (dispatch) => {
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

export const listNeedDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: NEED_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/needs/${id}`);

		dispatch({
			type: NEED_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: NEED_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
