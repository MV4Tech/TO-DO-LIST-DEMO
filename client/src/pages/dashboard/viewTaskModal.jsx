import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import '../../styles/dateTimePicker.css';
import taskService from '../../services/task-service';
import '../../styles/viewModalTask.css';




function ViewTaskModal({task}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <>
              <button onClick={handleShow} type="button" className="btn btn-outline-primary btn-sm" style={{ marginRight: '8px'}} data-mdb-ripple-color="dark">View</button>
      <Modal
        show={show}
        onHide={handleClose}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
            {/* Topic */}
        <Form.Group>
        <Form.Label>Topic</Form.Label>
        <Form.Control
         className='bg-white required custom-label'
         value={task.topic}
         readOnly
        />
        </Form.Group>

        {/* Description */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label >Description</Form.Label>
        <Form.Control className='required custom-label'  value={task.description} readOnly as="textarea" rows={3} />
      </Form.Group>

        {/* Priority */}
                <Form.Label>Priority</Form.Label>
        <Form.Select
        required
        aria-label="Default select example"
        value={task.priority}
        disabled
        style={{ backgroundColor: '#f8f9fa', cursor: 'not-allowed' }}
        >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </Form.Select>


    {/* Start date time */}
    <Form.Label className='mt-3 mb-1 pb-1'>Starting Time</Form.Label>
<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DemoContainer components={['DateTimePicker']}>
    <DateTimePicker
      label={task.startDate}
    
      disabled
      style={{ backgroundColor: '#000000', cursor: 'not-allowed' }}
    />
  </DemoContainer>
</LocalizationProvider>



    {/* End date time */}
    <Form.Label className='mt-3 mb-1 pb-1'>Deadline</Form.Label>
<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DemoContainer components={['DateTimePicker']}>
    <DateTimePicker
      label={task.endDate}
      disabled
      style={{ backgroundColor: '#000000', cursor: 'not-allowed' }}
    />
  </DemoContainer>
</LocalizationProvider>


          </Form>     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewTaskModal;