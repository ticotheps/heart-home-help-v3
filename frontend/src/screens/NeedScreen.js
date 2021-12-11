import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

export default function NeedScreen({ match }) {
	const [need, setNeed] = useState([]);

	useEffect(() => {
		async function fetchNeed() {
			// fetch data
			const { data } = await axios.get(`/api/needs/${match.params.id}`);
			// set 'data' to state
			setNeed(data);
		}
		fetchNeed();
	}, [match.params.id]);

	return (
		<div>
			<Link to='/' className='btn btn-light my-3'>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={need.image} alt={need.name} fluid />
				</Col>
				<Col md={3}>
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
								<Row>
									<Col>Price: </Col>
									<Col>
										<strong>${need.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status: </Col>
									<Col>
										{need.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
									</Col>
								</Row>
							</ListGroup.Item>
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
		</div>
	);
}
