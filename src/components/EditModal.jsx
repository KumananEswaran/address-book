import { Modal, Button, Form, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import FormGroup from './FormGroup';

const EditModal = ({ show, handleClose, contact, mutate }) => {
	const [showPicker, setShowPicker] = useState(false);

	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [avatar, setAvatar] = useState('');

	useEffect(() => {
		if (contact) {
			setName(contact.name || '');
			setPhone(contact.phone || '');
			setEmail(contact.email || '');
			setAddress(contact.address || '');
			setAvatar(contact.avatar || '');
		}
	}, [contact]);

	const [validated, setValidated] = useState(false);

	const [saving, setSaving] = useState(false);

	const handleSave = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.stopPropagation();
			setValidated(true);
			return;
		}
		setSaving(true);
		try {
			await axios.put(
				`https://address-book-backend-api.vercel.app/contacts/${contact.id}`,
				{
					name,
					phone,
					email,
					address,
					avatar,
				}
			);
			mutate();
			toast.success('Contact updated successfully!');
			handleClose();
		} catch (error) {
			console.error(error);
			toast.error('Failed to update contact');
		}
		setSaving(false);
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Contact Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form noValidate validated={validated} onSubmit={handleSave}>
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
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" type="submit" disabled={saving}>
								{saving ? (
									<>
										<Spinner size="sm" animation="border" className="me-2" />
										Saving...
									</>
								) : (
									'Save Changes'
								)}
							</Button>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};
export default EditModal;
