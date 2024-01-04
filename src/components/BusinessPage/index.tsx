import { partners, fundings } from '../../data/business';
import Events from '../Events';
import PastHackathon from './PastHackathon'

const BusinessPage = () => {

	return (
		<>
			<h1 className="fs-3">Unleash Collaborative Opportunities and Funding for Your Project</h1>
			<PastHackathon />
			<Events content={partners} contentTitle="Potential Partner" btnText="Contact" />
			<Events content={fundings} contentTitle="Funding" btnText="Contact" />
		</>
	);
};

export default BusinessPage;