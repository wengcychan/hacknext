export interface Event {
	img: {
		src: string;
		alt: string;
	}
	title: string;
	date?: string;
	website: string;
}

export interface About {
	img: {
		src: string;
		alt: string;
	}
	name: string;
	role: string;
	office: string;
	description: string;
	interest: string[];
}

export interface People {
	img: {
		src: string;
		alt: string;
	},
	name: string;
	role: string;
	organization: string;
}

interface Comment {
	name: string;
	icon: {
		src: string;
		alt: string;
	},
	description: string;
}

export interface Post {
	id: number,
	name: string;
	icon: {
		src: string;
		alt: string;
	},
	partner: string;
	date: string;
	event: string;
	project: {
		description: string;
		img: {
			src: string;
			alt: string;
		}
	},
	likes: number;
	liked: boolean;
	comments: Comment[];
}

export interface User {
	name: string;
	icon: {
		src: string;
		alt: string;
	}
}

