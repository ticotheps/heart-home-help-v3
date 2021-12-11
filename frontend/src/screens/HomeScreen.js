import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Need from '../components/Need';
import axios from 'axios';

export default function HomeScreen() {
	const [needs, setNeeds] = useState([]);

	useEffect(() => {
		async function fetchNeeds() {
			// fetch data
			const { data } = await axios.get('/api/needs/');
			// set 'data' to state
			setNeeds(data);
		}
		fetchNeeds();
	}, []);

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
