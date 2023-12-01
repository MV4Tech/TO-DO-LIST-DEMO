import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import '../../styles/dateTimePicker.css';
import { useNavigate } from 'react-router-dom';
import TaskService from '../../services/task-service' 
import UserService from '../../services/user-service' 
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);




function TaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userId, setUserId] = useState(null);

 

  const [task, setTask] = useState(
    {
      id:"",
      topic:"",
      description:"",
      priority:"",
      startDate:"",
      endDate:"",
      isActive:true,
      user:{
        id: userId,
      },
    });


    useEffect(() => {
      async function fetchData() {
        try {
          const obtainedUserId = await UserService.getIdByUsername();
  
          // Set the obtained user ID to the state
          setUserId(obtainedUserId);
  
          // Update the task state with the new user ID
          setTask((prevTask) => ({
            ...prevTask,
            user: {
              id: obtainedUserId,
            },
          }));
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error as needed
        }
      }
  
      fetchData();
    }, []); // Empty dependency array to run the effect only once on mount




    const handleChange = (e)=>{
      const value = e.target.value;
      setTask({...task,[e.target.name]: value})
  }

  const handleStartDateChange = (date) => {
    const originalDate = dayjs(date);
    const formattedDate = originalDate.format('YYYY-MM-DD HH:mm:ss');
    setTask({ ...task, startDate: formattedDate });
  };

  const handleEndDateChange = (date) => {
    const originalDate = dayjs(date);
    const formattedDate = originalDate.format('YYYY-MM-DD HH:mm:ss');
    setTask({ ...task, endDate: formattedDate });
  };

  const navigate = useNavigate();

  const saveTask = (e)=>{
    TaskService.saveTask(task)
    .then((response)=>{
      handleClose();
      console.log(response);
      
    
    }).catch((error)=>{
      console.log(error);
    })
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
        <form onSubmit={saveTask}>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="topic"
        value={task.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
        name="description"
        value={task.description}
        onChange={(e)=> handleChange(e)}
        as="textarea" required rows={3} />
      </Form.Group>
      <Form.Label>Priority</Form.Label>
      <div  className="form-text mb-1">
      Respectively: 1- Low Priority ; 5- High Priority           
      </div>  
      <Form.Select
      name="priority"
      value={task.priority}
      onChange={(e) => handleChange(e)}
       aria-label="Default select example"
       required
       defaultValue="">
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
        value={task.startDate ? dayjs(task.startDate) : null}
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
        value={task.endDate ? dayjs(task.endDate) : null}
        onChange={(date) => handleEndDateChange(date)}
        label="pick a deadline" />
      </DemoContainer>
    </LocalizationProvider> 
        </Modal.Body>
        <Modal.Footer>

    <Button variant="secondary" onClick={handleClose}>
        Close
       </Button>
     <Button variant="primary" type='sumbit'>Create</Button>
      
      </Modal.Footer>
</form>  
      </Modal>
    </>
  );
}

export default TaskModal;