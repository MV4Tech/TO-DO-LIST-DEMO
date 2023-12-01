import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ResolveTask({task,resolveTask}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <> 
      <button onClick={handleShow} type="button" className="btn btn-outline-success btn-sm" style={{ marginRight: '8px' }} data-mdb-ripple-color="dark">Mark As Resolved</button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>RESOLVE TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, are you sure you want to RESOLVE TASK: "{task.topic}"!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e,id) => resolveTask(e,task.id)}>
            Resolve
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ResolveTask;