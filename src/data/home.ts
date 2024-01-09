import AboutImg from '../assets/home/about.png';
import UserImg from '../assets/home/user.png';
import EthanIconImg from '../assets/home/icon1.png';
import AlexanderIconImg from '../assets/home/icon2.png';
import NoahIconImg from '../assets/home/icon3.png';
import BenjaminIconImg from '../assets/home/icon4.png';
import ScooterFlashImg from '../assets/home/ScooterFlash.png';
import TravelCompanionImg from '../assets/home/TravelCompanion.png';
import { About, People, Post, User } from '../types';

export const user: User = {
	name: 'Olivia Anderson',
	icon: {
		src: UserImg,
		alt: 'Icon'
	}
}

export const about: About = {
	img: {
		src: AboutImg,
		alt: 'Icon'
	},
	name: 'Olivia Anderson',
	role: 'UI/UX Designer',
	office: 'WebCraft Studio',
	description: 'I am a UX/UI designer dedicated to creating visually captivating digital experiences that leave a lasting impression',
	interest: [
		'User Research',
		'Product Design',
		'Prototyping',
		'Visual Design',
		'Information Architecture'
	]
};

const participant: People[] = [
	{
		img: {
			src: EthanIconImg,
			alt: 'Ethan Adams Icon'
		},
		name: 'Ethan Adams',
		role: 'Business Student',
		organization: 'Metropolitan University'
	}
];

const mentor: People[] = [
	{
		img: {
			src: AlexanderIconImg,
			alt: 'Alexander Parker Icon'
		},
		name: 'Alexander Parker',
		role: 'Software Developer',
		organization: 'Innovatix'	
	}
];

const jury: People[] = [
	{
		img: {
			src: NoahIconImg,
			alt: 'Noah Johnson Icon'
		},
		name: 'Noah Johnson',
		role: 'Director',
		organization: 'NexTech'	
	}
];

export const contact = {
	participant,
	mentor,
	jury
};

export const initialPosts: Post[] = [
	{
		id: 1,
		name: 'Ethan Adams',
		icon: {
			src: EthanIconImg,
			alt: "Ethan Adams Icon"
		},
		partner: 'Ava Davis and Liam Wilson',
		date: '15 Apr 2023',
		event: 'InnovationX',
		project: {
			description: 'Scooter Flash - Ride Green, Ride Smart, Ride Scoot',
			img: {
				src: ScooterFlashImg,
				alt: 'Scooter Flash Project Image'
			}
		},
		likes: 10,
		liked: false,
		comments: [
			{
				name: 'Noah Johnson',
				icon: {
					src: NoahIconImg,
					alt: 'Noah Johnson Icon'
				},
				description: 'Scooter Flash stands out as an app name that encapsulates the thrill and convenience of electric scooter rides, making it an engaging and memorable choice for users.'
			}
		]
	},
	{
		id: 2,
		name: 'Benjamin Johnson',
		icon: {
			src: BenjaminIconImg,
			alt: "Benjamin Johnson Icon"
		},
		partner: 'Sophia Mitchell, Ava Thompsonn and Mia Johnson',
		date: '1 Mar 2023',
		event: 'VentureHack',
		project: {
			description: 'TravelCompanion - Your Passport to Unforgettable Adventures',
			img: {
				src: TravelCompanionImg,
				alt: 'TravelCompanion Project Image'
			}
		},
		likes: 3,
		liked: false,
		comments: [
			{
				name: 'Alexander Parker',
				icon: {
					src: AlexanderIconImg,
					alt: "Alexander Parker Icon"
				},
				description: 'This travel app has exceeded expectations, delivering a seamless user experience and innovative features that enhance the journey of every traveller.'
			}
		]
	}
];