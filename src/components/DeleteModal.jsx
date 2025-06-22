import { Button, Modal, Spinner } from 'react-bootstrap';

const DeleteModal = ({ show, handleClose, handleDelete, deleting }) => {
	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Confirm Delete</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure want to delete this contact?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="danger" onClick={handleDelete} disabled={deleting}>
						{deleting ? (
							<>
								<Spinner size="sm" animation="border" className="me-2" />
								Deleting...
							</>
						) : (
							'Delete'
						)}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default DeleteModal;
