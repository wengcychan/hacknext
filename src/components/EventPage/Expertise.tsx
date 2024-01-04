import { expertises } from '../../data/event';
import { v4 as uuidv4 } from 'uuid';

const Expertise = () => (
	<div className="bg-white p-4 my-4 rounded-4" style={{ maxWidth: '600px' }}>
		<h2 className="fs-5 mb-4">My Expertise in Past Hackathon</h2>
		<div className="d-flex flex-wrap gap-3">
			{expertises.map(expertise =>
				<div
					key={uuidv4()}
					className="bg-primary bg-gradient py-2 px-3 rounded-3 text-white"
					style={{ fontSize: '14px', maxWidth: '150px' }}
				>
					{expertise}
				</div>
			)}
		</div>
	</div>
);

export default Expertise;