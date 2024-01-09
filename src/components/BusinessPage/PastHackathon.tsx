import { hackathons } from '../../data/business';
import { v4 as uuidv4 } from 'uuid';
import { Form } from 'react-bootstrap';

const PastHackathon = () => (
	<div className="bg-white p-4 my-4 rounded-4" style={{ maxWidth: '600px' }}>
		<label htmlFor="hackathon" className="fs-5">My Past Hackathon Project</label>
		<Form.Select id="hackathon" style={{ maxWidth: '300px' }}>
			{hackathons.map(hackathon => 
				<option key={uuidv4()} value={hackathon}>
					{hackathon}
				</option>
			)}
    </Form.Select>
	</div>
);

export default PastHackathon;