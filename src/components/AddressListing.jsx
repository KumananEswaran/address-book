import { Card, Button, Col, Row, Container, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const AddressListing = () => {
	// const [contacts, setContacts] = useState([]);

	// useEffect(() => {
	// 	const fetchContacts = async () => {
	// 		try {
	// 			const res = await axios.get(
	// 				'https://address-book-backend-api.vercel.app/contacts'
	// 			);
	// 			setContacts(res.data);
	// 		} catch (error) {
	// 			console.error('Error fetching, contacts:', error);
	// 		}
	// 	};
	// 	fetchContacts();
	// }, []);

	const {
		data: contacts,
		error,
		isLoading,
		mutate,
	} = useSWR('https://address-book-backend-api.vercel.app/contacts', fetcher);

	// Edit contact
	const [show, setShow] = useState(false);
	const [selectedContact, setSelectedContact] = useState(false);

	const handleShow = (contact) => {
		setSelectedContact(contact);
		setShow(true);
	};

	// Delete contact
	const [showDelete, setShowDelete] = useState(false);
	const [contactToDelete, setContactToDelete] = useState(null);
	const [deleting, setDeleting] = useState(false);

	const deleteShow = (contact) => {
		setContactToDelete(contact);
		setShowDelete(true);
	};

	const deleteClose = () => {
		setContactToDelete(null);
		setShowDelete(false);
	};

	const handleDelete = async () => {
		setDeleting(true);
		try {
			await axios.delete(
				`https://address-book-backend-api.vercel.app/contacts/${contactToDelete.id}`
			);
			mutate();
			deleteClose();
			toast.success('Contact deleted successfully!');
		} catch (error) {
			console.error(error);
			toast.error('Failed to delete contact');
		}
		setDeleting(false);
	};

	if (error) return <p className="mt-4 text-danger">Error loading contacts</p>;
	if (isLoading)
		return (
			<div className="text-center mt-4">
				<Spinner animation="border" role="status" />
				<p>Loading</p>
			</div>
		);

	return (
		<>
			<Container>
				<Row>
					{contacts.map((contact) => (
						<Col key={contact.id} md={6} xl={4} xxl={3}>
							<Card className="m-3 shadow-sm">
								<Card.Body>
									<Card.Title className="d-flex align-items-center gap-2">
										<span style={{ fontSize: '2rem' }}>
											{contact.avatar || '🙂'}
										</span>
										<span className="fw-bold">{contact.name}</span>
									</Card.Title>
									<Card.Text>
										📞 {contact.phone}
										<br />
										📧 {contact.email}
										<br />
										📍 {contact.address}
									</Card.Text>
									<Button
										variant="outline-primary"
										className="me-2"
										onClick={() => handleShow(contact)}>
										Edit
									</Button>
									<Button
										variant="outline-danger"
										onClick={() => deleteShow(contact)}>
										Delete
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
			<EditModal
				show={show}
				handleClose={() => setShow(false)}
				contact={selectedContact}
				mutate={mutate}
			/>
			<DeleteModal
				show={showDelete}
				handleClose={deleteClose}
				handleDelete={handleDelete}
				deleting={deleting}
			/>
		</>
	);
};
export default AddressListing;
