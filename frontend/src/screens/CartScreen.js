import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import { Message } from '../components/Message';
import { addToCart } from '../actions/cartActions';

export default function CartScreen({ match, location, history }) {
	const needId = match.params.id;

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	useEffect(() => {
		if (needId) {
			dispatch(addToCart(needId, qty));
		} else {
		}
	}, [dispatch, needId, qty]);

	return (
		<div>
			<h4>Cart</h4>
		</div>
	);
}
