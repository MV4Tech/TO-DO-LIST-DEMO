import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/dateTimePicker.css';
import taskService from '../../services/task-service';
import '../../styles/viewModalTask.css';
import ResolveTaskTask from './adminResolveTask';
import TaskService from '../../services/task-service';


function ResolvedTaskModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  {/*

  Body

*/}

const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TaskService.getTasksByUsername();
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const deleteTask = (e, id) => {
    e.preventDefault();
    TaskService.deleteTaskById(id).then((res) => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
    });
  };

  const resolveTask = (e, id) => {
    e.preventDefault();
    TaskService.setTaskInactive(id).then((res) => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
    });
  };

  const bodyStyle = {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '13px',
    color: '#555',
    background: 'none',
    marginTop: '30px',
  };

  const noTasksStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#888',
    marginTop: '20px',
  };

  {/*

  Body

*/}


  return (
    <>
     
                  <a onClick={handleShow} style={{ cursor: 'pointer' }} className="w-50 pr-3 pb-4 p-2">
                    <div className="card border-0 border-bottom-green shadow-lg shadow-hover ">
                      <div className="card-body text-center ">
                        <div className="text-center">    
                          <i className="fa fa-list-ul fa-4x my-2"></i>
                        </div>
                        resolved task
                      </div>
                    </div>
                  </a>
             
      <Modal
        show={show}
        onHide={handleClose}
        size = "lg"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>To Do List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={bodyStyle}>
      <h1 className="text-center text-dark mb-5 font-weight-bold">Resolved Tasks</h1>
      <div className="container bootstrap snippets bootdey">
        <div className="table-responsive">
          {loading ? (
            <p>Loading...</p>
          ) : tasks.length === 0 ? (
            <p style={noTasksStyle}>No Tasks Created... <a href="#">create</a></p>
          ) : (
            <table className="table colored-header datatable project-list"  style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th className="text-dark table-columns-text">Title</th>
                  <th className="text-dark table-columns-text">Date Start</th>
                  <th className="text-dark table-columns-text">Days to Deadline</th>
                  <th className="text-dark table-columns-text">Priority</th>
                  <th className="my-custom-td text-dark table-columns-text">Options</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <ResolveTaskTask task={task} deleteTask={deleteTask} resolveTask = {resolveTask} key={task.id} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>


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

export default ResolvedTaskModal;