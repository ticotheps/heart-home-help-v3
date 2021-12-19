import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { needListReducer, needDetailsReducer } from './reducers/needReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
	needList: needListReducer,
	needDetails: needDetailsReducer,
	cart: cartReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
