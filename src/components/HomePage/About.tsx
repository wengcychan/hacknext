import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { about } from "../../data/home";
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';

const About = () => (
	<div className="d-none d-md-block col-md-4 col-xl-3">
		<Card>

			<div style={{ backgroundColor: '#d2e2e9' }}>
				<Card.Img variant="top" src={about.img.src} alt={about.img.alt} width="100%" height="100%"/>
				<div className="text-center mt-3 mb-4">
					<Card.Title>{about.name}</Card.Title>
					<Card.Text className="mb-0">{about.role}</Card.Text>
					<Card.Text>{about.office}</Card.Text>
				</div>
			</div>

			<Card.Body>
				<ListGroup variant="flush">

					<ListGroup.Item className="mt-3">
						<Card.Title>About Me</Card.Title>
						<Card.Text className="mb-4">{about.description}</Card.Text>
					</ListGroup.Item>

					<ListGroup.Item className="mt-4 mb-3">
						<Card.Title>Interest</Card.Title>
						<Stack direction="horizontal" gap={2} style={{  display: 'flex', flexWrap: 'wrap', fontSize: '14px' }}>
							{about.interest.map(interest => 
								<div
									key={uuidv4()}
									className="bg-primary bg-gradient py-1 px-3 mt-3 rounded-3 text-white text-center"
								>
									{interest}
								</div>
							)}
						</Stack>
					</ListGroup.Item>

				</ListGroup>
			</Card.Body>

		</Card>
	</div>
);

export default About;