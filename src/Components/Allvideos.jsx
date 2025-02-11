import React, { useState } from "react";
import { Card, Button,Modal } from "react-bootstrap";

const Allvideos = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        <h4>Allvideos</h4>
        <div >
          <Card style={{ width: "14rem",borderRadius:"20px 20px 0px 0px",cursor:"pointer"}} onClick={handleShow}>
            <Card.Img
              variant="top"
              style={{ height: "250px",objectFit:"cover" ,borderRadius:"20px 20px 0px 0px"}}
              src="https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg"
            />

            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title>Card Title</Card.Title>

                <Button className="btn"><i className="fa-solid fa-trash"></i></Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

    <div>
    <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width="100%" height="315" src="https://www.youtube.com/embed/_oO4Qi5aVZs?si=rYcIIPYRVg-dCm92&autoplay=1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </div>
      
    </div>
  );
};

export default Allvideos;
