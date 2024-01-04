import { Event } from "../types";
import Junction2023Img from "../images/hackathon/Junction2023.png";
import SmartCitiesHackathonImg from "../images/hackathon/SmartCitiesHackathon.png";
import ClimateChangeChallengeImg from "../images/hackathon/ClimateChangeChallenge.png";
import LocationHackathonImg from "../images/hackathon/LocationHackathon.png";
import CraftConferenceImg from "../images/conference/CraftConference.png"
import UlemisteForumImg from "../images/conference/UlemisteForum.png"
import SmartCityExpoImg from "../images/conference/SmartCityExpo.png"

export const expertises: string[] = ['Sustainability', 'Smart City', 'Geoinformatics'];

export const hackathons: Event[] = [
	{
		img: {
			src: Junction2023Img,
			alt: 'Junction 2023 Image'
		},
		title: 'Junction 2023',
		date: '10 Nov - 12 Nov 2023',
		website: 'https://www.junction2023.com/'
	},
	{
		img: {
			src: SmartCitiesHackathonImg,
			alt: 'Smart Cities Hackathon Image'
		},
		title: 'Smart Cities Hackathon 3.0',
		date: '26 Apr - 17 Jun 2023',
		website: 'https://smartcitieshack3.devpost.com/'
	},
	{
		img: {
			src: ClimateChangeChallengeImg,
			alt: 'Climate Change Challenge Image'
		},
		title: 'The Climate Change-Makers Challenge: 2023',
		date: '28 Apr - 23 May 2023',
		website: 'https://entrepreneurs.utoronto.ca/event/the-climate-change-makers-challenge-2023/'
	}
	,
	{
		img: {
			src: LocationHackathonImg,
			alt: 'Location Intelligence for Smart Cities Hackathon Image'
		},
		title: 'Location Intelligence for Smart Cities Hackathon',
		date: '02 Mar - 03 Mar 2023',
		website: 'https://new.ultrahack.org/hackathons/location-intelligence-for-smart-cities-hackathon'
	}
];

export const conferences: Event[] = [
	{
		img: {
			src: CraftConferenceImg,
			alt: 'Craft Conference Image'
		},
		title: 'Craft Conference',
		date: '18 May - 19 May 2023',
		website: 'https://craft-conf.com/2023'
	},
	{
		img: {
			src: UlemisteForumImg,
			alt: 'Ulemiste Forum Image'
		},
		title: 'Ülemiste City Future Forum',
		date: '10 May - 11 May 2023',
		website: 'https://www.futureforum.ee/'
	},
	{
		img: {
			src: SmartCityExpoImg,
			alt: 'Smart City Expo Image'
		},
		title: 'Tampere Smart City Expo & Conference',
		date: '6 Jun - 7 Jun 2023',
		website: 'https://www.tscec.fi/fi/'
	}
];
