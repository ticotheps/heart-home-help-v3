import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Need from '../components/Need'

import needs from '../needs';

export default function HomeScreen() {
	return (
		<div>
			<h1>Latest Needs</h1>
			<Row>
				{needs.map((need) => (
					<Col key={need._id} sm={12} md={6} lg={4} xl={3}>
						<Need need={need} />
					</Col>
				))}
			</Row>
		</div>
	);
}
