import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MealType = ({ mealtype }) => {
	return (
		<>
			<Link to={`/mealtype/${mealtype._id}`}>
				<Card
					className='my-3 rounded'
					style={{ display: 'flex', flexDirection: 'row' }}
				>
					<img
						src={mealtype.image}
						alt=''
						style={{
							width: '140px',
							height: '140px',
							objectFit: 'cover',
						}}
					/>
					<div
						className='mealtype-text-container'
						style={{ padding: '0.5rem 1rem' }}
					>
						<Card.Title
							style={{ fontSize: 'larger', color: '#192f60' }}
						>
							{mealtype.title}
						</Card.Title>
						<Card.Text
							style={{ fontSize: 'smaller', color: '#8c96ab' }}
						>
							{mealtype.description}
						</Card.Text>
					</div>
				</Card>
			</Link>
		</>
	)
}

export default MealType
