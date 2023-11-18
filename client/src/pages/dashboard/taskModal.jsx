import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import '../../styles/dateTimePicker.css';




function TaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <>
    <a onClick={handleShow} style={{ cursor: 'pointer' }} className="w-50 pr-3 pb-4 p-2">
                    <div className="card border-0 border-bottom-red shadow-lg shadow-hover ">
                      <div className="card-body text-center ">
                        <div className="text-center">    
                          <i className="fa fa-pencil fa-4x my-2"></i>
                        </div>
                        Create Task
                      </div>
                    </div>
                  </a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control className=' bg-white required'  type="text"/>
      </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control className='required' as="textarea" rows={3} />
      </Form.Group>
      <Form.Label>Priority</Form.Label>
      <Form.Select required aria-label="Default select example">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
    
    <Form.Label className='mt-3 mb-1 pb-1'>Starting Time</Form.Label>
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer   components={['DateTimePicker']}>
        <DateTimePicker label="pick a datetime" />
      </DemoContainer>
    </LocalizationProvider>

    <Form.Label className='mt-3 mb-1 pb-1'>Deadline</Form.Label>
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer   components={['DateTimePicker']}>
        <DateTimePicker  label="pick a deadline" />
      </DemoContainer>
    </LocalizationProvider>
    
   
 
              
            

   

          </Form>     
          
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary">Create</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskModal;