import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import restaurants from '../../restaurants'
import MenuItemList from '../MenuItemList/MenuItemList'
import './MenuItem.css'

const MenuItem = ({ restaurant }) => {
	return (
		<>
			<h1>{restaurant.name}</h1>
			<ul>
				{restaurant.menu.map((menuItem) => (
					<div className='' key={menuItem._id}>
						<MenuItemList menuItem={menuItem} />
					</div>
				))}
			</ul>
		</>
	)
}

export default MenuItem
