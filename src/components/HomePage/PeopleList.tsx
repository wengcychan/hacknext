import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import { People } from '../../types';

const PeopleList = ({ type, people }: { type: string, people: People[] }) => (
	<div className="mb-3">
		<Card.Title>{type}</Card.Title>
		{people.map(person => 
			<div key={uuidv4()} className="d-flex align-items-center">
				<div>
					<img src={person.img.src} alt={person.img.alt} width="50px" height="50px"/>
				</div>
				<div className="ps-2 pe-1 flex-grow-1">
					<p className="mb-0 fw-bold" style={{fontSize: '14px'}}>{person.name}</p>
					<p className="mb-0" style={{fontSize: '12px'}}>{person.role}</p>
					<p className="mb-0" style={{fontSize: '12px'}}>{person.organization}</p>
				</div>
				<div>
					<Button variant="primary" style={{fontSize: '14px'}}>Connect</Button>
				</div>
			</div>
		)}
	</div>
);

export default PeopleList;