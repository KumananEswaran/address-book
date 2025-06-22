import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
	return (
		<Navbar className="navbar-indigo" variant="dark" expand="md">
			<Container>
				<Navbar.Brand className="fw-bold fs-3">Address Book</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link
							as={NavLink}
							to="/"
							className="fw-semibold fs-5 d-flex align-items-center">
							<i className="bi bi-house-door me-2"></i>Home
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/contacts"
							className="fw-semibold fs-5 d-flex align-items-center">
							<i className="bi bi-person-lines-fill me-2"></i>Contacts
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/add-contact"
							className="fw-semibold fs-5 d-flex align-items-center">
							<i className="bi bi-person-plus me-2"></i>New Contacts
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
