import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-flex  align-items-center gap-3">
        <h4>Upload New Video</h4>
        <button className="btn btn-warning" onClick={handleShow}>
          +
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className="border border-5 rounded p-3">
            <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Caption" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Image URL"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Image URL" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Youtube Link"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Youtube Link" />
          </FloatingLabel>

            </div>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
