import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import taskService from '../../services/task-service';
import { set } from 'lodash';

function QuoteModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => { window.location.reload(false); setShow(false);}
  const handleShow = () => setShow(true);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [hashtags, setHashtags] = useState(null);
  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await taskService.getRandomQuote();
        if(response.data.author === "The Buddha"){
            setQuote("For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul?");
            setAuthor("Jesus Christ")
            setHashtags("IsItWorthIt")
        }else{
            setQuote(response.data.content);
            setAuthor(response.data.author)
            setHashtags(response.data.tags)
        }
        
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomQuote();
  }, []);




  return (
    <>
                <a onClick={handleShow} style={{ cursor: 'pointer' }} className="w-50 pr-3 p-2">
                    <div className="card border-0 border-bottom-yellow shadow-lg shadow-hover">
                      <div className="card-body text-center">
                        <div className="text-center">
                          <i className="fa fa-4x fa-trophy my-2"></i>
                        </div>
                        Quote
                      </div>
                    </div>
                  </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You Random Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{ display: 'flex', fontSize: '20px' ,flexDirection: 'column' }}>
        {/* Left side (quote) */}
        <div style={{fontStyle:'italic' }}>{quote}</div>
        <br></br>
        {/* Center (author) */}
        <div style={{ textAlign: 'right', fontWeight:'bold' }}>{author}</div>
        <br></br>
        {/* Right side (hashtags) */}
        <div style={{ textAlign: 'left' }}>#{hashtags}</div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Got it
          </Button>       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default QuoteModal;