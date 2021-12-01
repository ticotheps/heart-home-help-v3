import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Need({ need }) {
	return (
		<Card
			style={{ width: '16rem', height: '24rem' }}
			className='my-3 p-3 rounded need-card'
		>
			<Link to={`/needs/${need._id}`}>
				<Card.Img className='card-image' src={need.image} />
			</Link>

			<Card.Body>
				<Link to={`/needs/${need._id}`}>
					<Card.Title as='div'>
						<strong>{need.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<div className='my-3'>
						<Rating
							value={need.rating}
							text={`${need.numReviews}`}
							color={'#f8e825'}
						/>
					</div>
				</Card.Text>

				<Card.Text as='h3'>${need.price}</Card.Text>
			</Card.Body>
		</Card>
	);
}
