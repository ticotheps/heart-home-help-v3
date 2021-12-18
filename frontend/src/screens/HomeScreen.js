import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Need from '../components/Need';
import { listNeeds } from '../actions/needActions';

export default function HomeScreen() {
	const dispatch = useDispatch();
	const needList = useSelector((state) => state.needList);
	const { error, loading, needs } = needList;

	useEffect(() => {
		dispatch(listNeeds());
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
