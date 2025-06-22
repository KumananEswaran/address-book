import { Form, Button } from 'react-bootstrap';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

const FormGroup = ({
	name,
	setName,
	email,
	setEmail,
	phone,
	setPhone,
	address,
	setAddress,
	avatar,
	setAvatar,
	showPicker,
	setShowPicker,
}) => {
	return (
		<>
			<Form.Group className="mb-3" controlId="name">
				<Form.Label className="fw-semibold">Full Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter full name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">
					Please enter a name.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlId="phone">
				<Form.Label className="fw-semibold">Phone Number</Form.Label>
				<Form.Control
					type="tel"
					placeholder="Enter phone number"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern="^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$"
					required
				/>
				<Form.Control.Feedback type="invalid">
					Please enter a valid Malaysian phone number.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlId="email">
				<Form.Label className="fw-semibold">Email Address</Form.Label>
				<Form.Control
					type="email"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">
					Please enter a valid email.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlId="address">
				<Form.Label className="fw-semibold">Home Address</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter address"
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					required
				/>
				<Form.Control.Feedback type="invalid">
					Please enter address.
				</Form.Control.Feedback>
			</Form.Group>

			<Form.Group className="mb-3" controlId="avatar">
				<Form.Label className="fw-semibold">Choose Avatar Emoji</Form.Label>
				<div className="mb-2">
					Selected: <span style={{ fontSize: '1.5rem' }}>{avatar}</span>
				</div>
				<Button
					variant="outline-secondary"
					onClick={() => setShowPicker((prev) => !prev)}>
					{showPicker ? 'Hide Picker' : 'Select Emoji'}
				</Button>

				{showPicker && (
					<Picker
						data={data}
						onEmojiSelect={(emoji) => setAvatar(emoji.native)}
					/>
				)}
			</Form.Group>
		</>
	);
};
export default FormGroup;
