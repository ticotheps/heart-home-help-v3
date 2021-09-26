import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

export default function Need({ need }) {
	return (
		<Card
			style={{ width: '16rem', height: '24rem' }}
			className='my-3 p-3 rounded need-card'
		>
			<a href={`/need/${need._id}`}>
				<Card.Img className='card-image' src={need.image} />
			</a>

			<Card.Body>
				<a href={`/need/${need._id}`}>
					<Card.Title as='div'>
						<strong>{need.name}</strong>
					</Card.Title>
				</a>

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
