import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCards = () => {
	return (
		<section className="py-4">
			<Container>
				<Row className="g-4">
					<Col md={6}>
						<Card className="shadow-sm h-100 custom-bg-gray">
							<Card.Body>
								<Card.Title className="fs-4 fw-bold">View Contacts</Card.Title>
								<Card.Text>
									Browse and manage all your saved contacts.
								</Card.Text>
								<Button
									as={Link}
									to="/contacts"
									className="text-white custom-btn-dark">
									Go to Contacts
								</Button>
							</Card.Body>
						</Card>
					</Col>

					<Col md={6}>
						<Card className="shadow-sm h-100 custom-bg-indigo">
							<Card.Body>
								<Card.Title className="fs-4 fw-bold">
									Add New Contact
								</Card.Title>
								<Card.Text>
									Quickly add a new contact to your address book.
								</Card.Text>
								<Button
									as={Link}
									to="/add-contact"
									className="text-white custom-btn-indigo">
									Add Contact
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HomeCards;
