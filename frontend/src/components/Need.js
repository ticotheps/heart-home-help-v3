import React from 'react';
import { Card } from 'react-bootstrap';

export default function Need({ need }) {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/need/${need._id}`}>
				<Card.Img src={need.image} />
			</a>

			<Card.Body>
				<a href={`/need/${need._id}`}>
					<Card.Title as='div'>
						<strong>{need.name}</strong>
					</Card.Title>
				</a>

				<Card.Text as='div'>
					<div className='my-3'>
						{need.rating} from {need.numReviews} reviews
					</div>
				</Card.Text>

				<Card.Text as='h3'>${need.price}</Card.Text>
			</Card.Body>
		</Card>
	);
}
