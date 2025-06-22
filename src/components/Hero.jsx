import { Container, Row, Col } from 'react-bootstrap';

const Hero = ({
	title = 'Welcome to Address Book',
	subtitle = 'Manage your contacts easily and efficiently',
}) => {
	return (
		<div className="hero-section">
			<Container>
				<Row className="justify-content-center">
					<Col md={10}>
						<h1 className="display-4 fw-bold">{title}</h1>
						<p className="lead mt-3">{subtitle}</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Hero;
