import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Button,
	Card,
	Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listNeedDetails } from '../actions/needActions';

export default function NeedScreen({ match }) {
	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();
	const needDetails = useSelector((state) => state.needDetails);
	const { error, loading, need } = needDetails;

	useEffect(() => {
		dispatch(listNeedDetails(match.params.id));
	}, [dispatch, match]);

	return (
		<div>
			<Link to='/' className='btn btn-light my-3'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row className='align-items-center'>
					<Col md={5}>
						<Image src={need.image} alt={need.name} fluid />
					</Col>
					<Col md={4}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{need.name}</h3>
							</ListGroup.Item>

							<ListGroup.Item>
								<Rating
									value={need.rating}
									text={`${need.numReviews} reviews`}
									color={'#f8e825'}
								/>
							</ListGroup.Item>

							<ListGroup.Item>Price: ${need.price}</ListGroup.Item>

							<ListGroup.Item>Description: {need.description}</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row className='align-items-center'>
										<Col>Price: </Col>
										<Col>
											<strong>${need.price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>

								<ListGroup.Item>
									<Row className='align-items-center'>
										<Col>Status: </Col>
										<Col>
											{need.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
										</Col>
									</Row>
								</ListGroup.Item>

								{need.countInStock > 0 && (
									<ListGroup.Item>
										<Row className='align-items-center'>
											<Col>Qty: </Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={(e) => setQty(e.target.value)}
												>
													{[...Array(need.countInStock).keys()].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}

								<ListGroup.Item>
									<div className='d-grid gap-2'>
										<Button
											className='btn btn-lg btn-dark'
											disabled={need.countInStock === 0}
											type='button'
										>
											Add to Cart
										</Button>
									</div>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</div>
	);
}
