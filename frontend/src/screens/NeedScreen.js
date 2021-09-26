import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';

import needs from '../needs';

export default function NeedScreen({ match }) {
	const need = needs.find((need) => need._id == match.params.id);
	return (
		<div>
			<Link to='/' className='btn btn-light my-3'>
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={need.image} alt={need.name} fluid />
				</Col>
			</Row>
		</div>
	);
}
