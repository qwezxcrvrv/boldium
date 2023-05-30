import {Button, Modal} from 'react-bootstrap';
import './emailForm.scss';

function ConfirmModal(props) {
  

  return (
    <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="confirmModal"
    >
      <Modal.Header className="modalHeader" >        
      </Modal.Header>
      <Modal.Body>
        <h3>Boldium Architecture</h3>
        <br></br>
        <p>Thanks for contacting us. <br /> We will get back to you ASAP</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" className="modalClose" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ConfirmModal;