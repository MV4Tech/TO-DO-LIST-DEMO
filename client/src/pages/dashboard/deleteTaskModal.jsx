import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteTask({task,deleteTask}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} type="button" className="btn btn-outline-danger btn-sm" style={{ marginRight: '8px' }} data-mdb-ripple-color="dark">Delete</button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, are you sure you want to DELETE TASK: "{task.topic} " !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e,id) => deleteTask(e,task.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeleteTask;