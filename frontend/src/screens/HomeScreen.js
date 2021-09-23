import React from 'react';
import { Row, Col } from 'react-bootstrap';

import needs from '../needs';

export default function HomeScreen() {
	return (
		<div>
			<h1>Latest Needs</h1>
			<Row>
				{needs.map((need) => (
					<Col key={need._id} sm={12} md={6} lg={4} xl={3}>
						<h3>{need.name}</h3>
					</Col>
				))}
			</Row>
		</div>
	);
}
