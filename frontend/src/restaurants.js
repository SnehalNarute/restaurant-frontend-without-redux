import breakfast from './assets/breakfast2x.png'
import lunch from './assets/lunch2x.png'
import snacks from './assets/snacks2x.png'
import dinner from './assets/dinner2x.png'
// menu images
import butterchicken from './assets/butterchicken.png'

const restaurants = [
	{
		_id: '0',
		name: 'Gulab Restaurant',
		location: 'Malad',
		address: 'Marol Naka Road, Malad East-400091',
		price: 600,
		cuisines: ['Fast Food, ', 'North Indian'],
		img: `${lunch}`,
		phone: '+91 114004596',
		menu: [
			{
				_id: '0',
				name: 'Butter Chicken',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'Butter naan',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
	{
		_id: '1',
		name: 'Dominoz',
		location: 'Goregaon',
		address: 'Station Road, Goregaon-400091 ',
		price: 700,
		cuisines: ['North Indian'],
		img: `${lunch}`,
		phone: '+91 14110963',
		menu: [
			{
				_id: '0',
				name: 'Butter pizza',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'pizza naan',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
	{
		_id: '2',
		name: 'Pizza Hut',
		location: 'Virar',
		address: 'Global City Road, Virar-401303',
		price: 500,
		cuisines: ['Street Food'],
		img: `${breakfast}`,
		phone: '+91 964004511',
		menu: [
			{
				_id: '0',
				name: 'Salad',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'Salad2',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
	{
		_id: '3',
		name: 'Empire Restaurant',
		location: 'Pune',
		address: 'City Road, Koregaon Park-530006, Pune',
		price: 400,
		cuisines: ['South Indian, ', 'Chinese'],
		img: `${snacks}`,
		phone: '+91 454004000',
		menu: [
			{
				_id: '0',
				name: 'Chicken burger',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'Veg Burger',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
	{
		_id: '4',
		name: 'Captain Sams',
		location: 'Delhi',
		address: 'Sector70, Delhi-515436',
		price: '300',
		cuisines: ['Chinese'],
		img: `${snacks}`,
		phone: '+91 1586947235',
		menu: [
			{
				_id: '0',
				name: 'Idli Sambhar',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'Dosa with chutney',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
	{
		_id: '5',
		name: 'Star Planet',
		location: 'Mumbai',
		address: 'Borivali West, Mumbai-210006, Mumbai',
		price: 1000,
		cuisines: ['North Indian'],
		img: `${dinner}`,
		phone: '+91 366582416',
		menu: [
			{
				_id: '0',
				name: 'Chicken korma',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'Chicken Biryani',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
	{
		_id: '6',
		name: 'Royal Star',
		location: 'Pune',
		address: 'West Side, Pune-530006, Pune',
		price: 550,
		cuisines: ['Street Food, ', 'South Indian'],
		img: `${snacks}`,
		phone: '+91 745852321',
		menu: [
			{
				_id: '0',
				name: 'Pani Puri',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'Anda Curry',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
	{
		_id: '7',
		name: 'Apna Punjab',
		location: 'Delhi',
		address: 'Delhi sector-360, Delhi-110001',
		price: 800,
		cuisines: ['South Indian'],
		img: `${lunch}`,
		phone: '+91 656975412',
		menu: [
			{
				_id: '0',
				name: 'Chole Bhature',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
			{
				_id: '1',
				name: 'Vada Pao',
				price: 120,
				desc: 'sdsddsd',
				image: `${butterchicken}`,
			},
		],
	},
]

export default restaurants
