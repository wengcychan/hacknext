import Card from 'react-bootstrap/Card';
import { contact } from "../../data/home";
import PeopleList from './PeopleList'

const Contact = () => {

	const { participant, mentor, jury } = contact;

	return (
	<div className="d-none d-xl-block col-xl-3 right-wrapper">
		<Card>
			<Card.Body>
				<Card.Title className="mb-4">Discover Your Network</Card.Title>
				<PeopleList type="Participant" people={participant}/>
				<PeopleList type="Mentor" people={mentor}/>
				<PeopleList type="Jury" people={jury}/>
			</Card.Body>
		</Card>
	</div>
	);
};

export default Contact;