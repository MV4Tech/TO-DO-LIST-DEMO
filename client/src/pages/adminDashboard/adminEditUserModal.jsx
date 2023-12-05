import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import UserService from '../../services/user-service' 



function EditTaskModal({user}) {

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
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await UserService.getCountTaskByUsername(username);
        setTaskCount(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);



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
        <form onSubmit={updateUser}>
        <Modal.Body>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="username"
        value={editTask.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="username"
        value={editTask.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="username"
        value={editTask.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="username"
        value={editTask.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="username"
        value={editTask.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Topic</Form.Label>
        <Form.Control
        name="username"
        value={editTask.topic}
        onChange={(e) => handleChange(e)}
        className=' bg-white'  required type="textbox"/>
      </Form.Group>

          
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