import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import mealtypes from '../../mealtypes'
import MealType from '../MealType/MealType'

const MealGrid = () => {
	return (
		<>
			<div className='meal-h6'>
				<h6 style={{ color: '#8c96ab', fontWeight: '500' }}>
					Discover restaurants by type of meal
				</h6>
			</div>
			<Row>
				{mealtypes.map((mealtype) => (
					<Col sm={8} md={6} lg={4} key={mealtype._id}>
						<MealType mealtype={mealtype} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default MealGrid
