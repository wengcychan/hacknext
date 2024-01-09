import { Event } from "../types";
import NLSImg from "../assets/partner/NLS.png"
import FinEstImg from "../assets/partner/FinEst.png"
import GeoforumImg from "../assets/partner/Geoforum.png"
import LIHImg from "../assets/partner/LIH.png"
import BusinessFinlandImg from "../assets/funding/BusinessFinland.png"
import ArcticBusinessImg from "../assets/funding/ArcticBusiness.png"
import HorizonEuropeImg from "../assets/funding/HorizonEurope.png"

export const hackathons: string[] = ['Community360'];

export const partners: Event[] = [
	{
		img: {
			src: NLSImg,
			alt: 'NLS Image'
		},
		title: 'National Land Survey of Finland',
		website: 'https://www.maanmittauslaitos.fi/en'
	},
	{
		img: {
			src: FinEstImg,
			alt: 'FinEst Image'
		},
		title: 'FinEst Centre',
		website: 'https://finestcentre.eu/'
	},
	{
		img: {
			src: GeoforumImg,
			alt: 'Geoforum Image'
		},
		title: 'Geoforum',
		website: 'https://geoforum.fi/'
	}
	,
	{
		img: {
			src: LIHImg,
			alt: 'Location Innovation Hub Image'
		},
		title: 'Location Innovation Hub',
		website: 'https://locationinnovationhub.eu/en/home/'
	}
];

export const fundings: Event[] = [
	{
		img: {
			src: BusinessFinlandImg,
			alt: 'Business Finland Image'
		},
		title: 'Business Finland',
		website: 'https://www.businessfinland.fi/suomalaisille-asiakkaille/etusivu'
	},
	{
		img: {
			src: ArcticBusinessImg,
			alt: 'Arctic Business Image'
		},
		title: 'Arctic Business',
		website: 'https://abi.se/'
	},
	{
		img: {
			src: HorizonEuropeImg,
			alt: 'Horizon Europe Image'
		},
		title: 'Horizon Europe',
		website: 'https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en'
	}
];
