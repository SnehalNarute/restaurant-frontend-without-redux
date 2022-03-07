import React from 'react'
import { Container } from 'react-bootstrap'

const MenuItemList = ({ menuItem }) => {
	return (
		<>
			<Container>
				<ul>
					<li>
						{menuItem.name}, {menuItem.price}
					</li>
					<p>{menuItem.desc}</p>
					<img src={menuItem.image} alt='' />
				</ul>
			</Container>
		</>
	)
}

export default MenuItemList
