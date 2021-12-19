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
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

export default function CartScreen({ match, location, history }) {
	const needId = match.params.id;

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (needId) {
			dispatch(addToCart(needId, qty));
		} else {
		}
	}, [dispatch, needId, qty]);

	return (
		<Row>
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<Message variant='info'>
						Your cart is empty. <Link to='/'>Let's fill it up!</Link>
					</Message>
				) : (
					<ListGroup variant='flush'>
						{cartItems.map((item) => (
							<ListGroup.Item key={item.need}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link to={`/need/${item.need}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}></Col>
		</Row>
	);
}
