import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import '../../styles/dateTimePicker.css';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import taskService from '../../services/task-service';
dayjs.extend(utc);
import TaskService from '../../services/task-service';
import UserService from '../../services/user-service' 



function EditTaskModal({task}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userId, setUserId] = useState(null);


  const [editTask,setEditTask] = useState({
    id : task.id,
    topic : "",
    description : "",
    priority : "",
    startDate : "",
    endDate : "",
    isActive: true,
    user : {
      id: userId
    }
  });


  useEffect(() => {
    async function fetchData() {
      try {
        const obtainedUserId = await UserService.getIdByUsername();
  
        // Update the task state with the new values
        setEditTask((prevTask) => ({
          ...prevTask,
          user: { id: obtainedUserId },
        }));
  
        // Set the obtained user ID to the state
        setUserId(obtainedUserId);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error as needed
      }
    }
  
    fetchData();
  }, []);
  

  useEffect(() => {
    
    const fetchData = async () =>{
        try{
          setEditTask(task)
        }catch(error){
          console.log(error);
        }

    };
    fetchData();

  }, []);
  



  const handleChange = (e)=>{
    const value = e.target.value;
    setEditTask({...editTask,[e.target.name]: value})
  } 




  const updateTask = (e) => {
    taskService.updateTaskById(editTask)
      .then((response) => {
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const handleStartDateChange = (date) => {
    const originalDate = dayjs(date);
    const formattedDate = originalDate.format('YYYY-MM-DD HH:mm:ss');
    setEditTask({ ...editTask, startDate: formattedDate });
  };

  const handleEndDateChange = (date) => {
    const originalDate = dayjs(date);
    const formattedDate = originalDate.format('YYYY-MM-DD HH:mm:ss');
    setEditTask({ ...editTask, endDate: formattedDate });
  };

  return (
    <>
      
                  <button onClick={handleShow} type="button" className="btn btn-outline-secondary btn-sm" style={{ marginRight: '8px' }} data-mdb-ripple-color="dark">Edit</button>


                  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <form onSubmit={updateTask}>
        <Modal.Body>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="topic"
        value={editTask.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>

      </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
        name="description"
        value={editTask.description}
        onChange={(e)=> handleChange(e)}
        as="textarea" required rows={3} />
      </Form.Group>
      <Form.Label>Priority</Form.Label>
      <div  className="form-text mb-1">
      Respectively: 1- Low Priority ; 5- High Priority           
      </div>  
      <Form.Select
      name="priority"
      value={editTask.priority}
      onChange={(e) => handleChange(e)}
       aria-label="Default select example"
       required
       defaultValue=""
       >
      <option value="" disabled>Select a priority</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
    
    <Form.Label className='mt-3 mb-1 pb-1'>Starting Time</Form.Label>
    <div  className="form-text mb-1">
      * not required          
      </div>
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer   components={['DateTimePicker']}>
        <DateTimePicker
        name="startDate"
        value={(editTask.startDate ? dayjs(task.startDate) : null)}
        onChange={(date) => handleStartDateChange(date)}
        label="pick a datetime" />
      </DemoContainer>
    </LocalizationProvider>

    <Form.Label className='mt-3 mb-1 pb-1'>Deadline</Form.Label>
    <div  className="form-text mb-1">
      * not required          
      </div>
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer   components={['DateTimePicker']}>
        <DateTimePicker
        name="endDate"
        value={(editTask.endDate ? dayjs(task.endDate) : null)}
        onChange={(date) => handleEndDateChange(date)}
        label="pick a deadline" />
      </DemoContainer>
    </LocalizationProvider> 
        </Modal.Body>
        <Modal.Footer>

    <Button variant="secondary" onClick={handleClose}>
        Close
       </Button>
     <Button variant="primary" type='sumbit'>Update</Button>
      
      </Modal.Footer>
</form>  
      </Modal>
    </>
  );
}

export default EditTaskModal;