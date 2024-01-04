import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Event } from '../types';

const Events = ({content, contentTitle, btnText}: {content: Event[], contentTitle: string, btnText: string}) => (
  <div className="my-5">
    <h2 className="fs-4">{contentTitle}</h2>
    <Row xs={1} sm={2} md={4} className="g-4">
      {content.map(({ img, title, date, website }) => (
        <Col key={uuidv4()} xs={12} sm={6} md={3}>
          <div className="d-flex h-100">
            <Card className="w-100">
              <Card.Img variant="top" src={img.src} alt={img.alt} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mx-2" style={{ fontSize: '18px' }}>{title}</Card.Title>
                <Card.Text className="mx-2">{date}</Card.Text>
                <Button
                  variant="primary"
                  href={website}
                  target="_blank"
                  className="mt-auto mx-auto"
                  style={{ width: '100px', fontSize: '14px' }}
                >
                  {btnText}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default Events;