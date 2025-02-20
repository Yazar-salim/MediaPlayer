import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { uploadVideo } from "../services/allAPI";

const Add = ({setVideoResp}) => {

  const [video, setVideo] = useState({
    caption: "",
    image: "",
    videoURL: "",
  });

  // console.log(video);
  const [error,setError]=useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave=async()=>{
    if(video.caption && video.image && video.videoURL){
      try{
            let response=await uploadVideo(video)
            setVideoResp(response)
            if(200<=response.status<=300){
              alert("Data Saved Successfully")
              setShow(false)
              setVideo({
                caption: "",
                image: "",
                videoURL: "",
              })
            }else{
              alert("Error Occured Contact ADMIN")
            }
            
            
      }
      catch{
          alert("An error Occured")
      }
      
      
    }else{
      alert("Please Fill the form")
    }
  }
  

  const separateUrl=(url)=>{
    if(url.includes(".be/")){
      const value=url.split('.be/')[1]
      setError(false);
      setVideo({...video,videoURL:value})
    }
    else{
      console.error("invalid");
      setError(true)
      
    }

    
    
  }
  
  

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
              <Form.Control onChange={(e)=>{setVideo({...video,caption:e.target.value})}} type="text" placeholder="Video Caption" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Image URL"
              className="mb-3"
            >
              <Form.Control onChange={(e)=>{setVideo({...video,image:e.target.value})}} type="text" placeholder="Video Image URL" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Youtube Link"
              className="mb-3"
            >
              <Form.Control onChange={(e)=>separateUrl(e.target.value)} type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            
            {error?
              <p className="text-danger">Invalid URL try with other !!!!</p>:""
            }
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
