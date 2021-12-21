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
import { addToCart, removeFromCart } from '../actions/cartActions';

export default function CartScreen({ match, location, history }) {
	const needId = match.params.id;

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (needId) {
			dispatch(addToCart(needId, qty));
		}
	}, [dispatch, needId, qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
		// removes the previously-added query string from the URL to prevent
		// an unwanted update of the cart on a refresh of the page
		history.push('/cart');
	};

	const checkoutHandler = () => {
		history.push('/login?redirect=shipping');
	};

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
								<Row className='align-items-center'>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>

									<Col md={4}>
										<Link to={`/needs/${item.need}`}>{item.name}</Link>
									</Col>

									<Col md={2}>${item.price}</Col>

									<Col md={1}>
										<span>Qty: </span>
									</Col>

									<Col md={1}>
										<Form.Control
											as='select'
											value={item.qty}
											onChange={(e) => {
												dispatch(addToCart(item.need, Number(e.target.value)));
												// removes the previously-added query string from the URL to prevent
												// an unwanted update of the cart on a refresh of the page
												history.push('/cart');
											}}
										>
											{[...Array(item.countInStock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>

									<Col md={1}>
										<Button
											type='button'
											variant='light'
											onClick={() => removeFromCartHandler(item.need)}
										>
											<i className='fas fa-trash'></i>
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>
								Subtotal for{' '}
								{cartItems.reduce((acc, item) => acc + item.qty, 0)} item(s):
							</h2>
							<h3>
								$
								{cartItems
									.reduce((acc, item) => acc + item.qty * item.price, 0)
									.toFixed(2)}
							</h3>
						</ListGroup.Item>

						<ListGroup.Item className='text-center'>
							<Button
								type='button'
								className='btn-block btn-dark'
								size='lg'
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								Proceed to Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
}
