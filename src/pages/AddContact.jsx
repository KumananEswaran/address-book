import NavigationBar from '../components/Navigationbar';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import FormGroup from '../components/FormGroup';

const AddContact = () => {
	const [showPicker, setShowPicker] = useState(false);

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [avatar, setAvatar] = useState('🙂');

	const [validated, setValidated] = useState(false);

	const [submitting, setSubmitting] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
			setValidated(true);
			return;
		}
		setSubmitting(true);
		try {
			await axios.post(
				'https://address-book-backend-api.vercel.app/add-contact',
				{
					name,
					phone,
					email,
					address,
					avatar,
				}
			);
			toast.success('Contact saved successfully!');
		} catch (error) {
			console.error('Error saving contact:', error);
			toast.error('Failed to save contact. Please try again.');
		}
		setSubmitting(false);
		return navigate('/contacts');
	};

	return (
		<>
			<NavigationBar />
			<Container className="py-5">
				<h2 className="mb-4 text-center fw-bold">Add a New Contact</h2>
				<Form
					noValidate
					validated={validated}
					className="bg-white p-4 rounded shadow mx-auto"
					style={{ maxWidth: '600px' }}
					onSubmit={handleSubmit}>
					<FormGroup
						name={name}
						setName={setName}
						phone={phone}
						setPhone={setPhone}
						email={email}
						setEmail={setEmail}
						address={address}
						setAddress={setAddress}
						avatar={avatar}
						setAvatar={setAvatar}
						showPicker={showPicker}
						setShowPicker={setShowPicker}
					/>

					<div className="d-grid">
						<Button
							className="submit-btn-indigo fw-semibold"
							size="lg"
							type="submit"
							disabled={submitting}>
							{submitting ? (
								<>
									<Spinner size="sm" animation="border" className="me-2" />
									Submitting...
								</>
							) : (
								'Save Contact'
							)}
						</Button>
					</div>
				</Form>
			</Container>
		</>
	);
};
export default AddContact;
