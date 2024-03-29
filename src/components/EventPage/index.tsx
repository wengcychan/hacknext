import { hackathons, conferences } from '../../data/event';
import Expertise from './Expertise'
import Events from '../Events';

const EventPage = () => (
		<>
			<h1 className="fs-3">Discover Relevant Events for Your Innovation Journey</h1>
			<Expertise />
			<Events content={hackathons} contentTitle="Related Hackathon" btnText="Hackathon Website" />
			<Events content={conferences} contentTitle="Related Conference" btnText="Conference Website" />
		</>
);

export default EventPage;