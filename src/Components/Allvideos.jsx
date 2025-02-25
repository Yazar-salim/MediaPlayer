import React, { useEffect, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { addHistory, deleteVideo, getSingleCategory, showVideo, updateCategory, uploadVideo } from "../services/allAPI";

const Allvideos = ({allVideos,videoDeleteResponse,setCategoryVideoResponseDelete}) => {
  const [show, setShow] = useState(false);

  const [selectedVideo,setSelectedVideo]=useState(null);

  const handleClose = () => setShow(false);
  const handleShow = async (video) => {
    const {caption , videoURL} =video
    let date = new Date();
    let formattedDate = date.toLocaleString('en-IN',{timeZoneName:'short'});
    const payload ={caption , videoURL , formattedDate}
    try {
      await addHistory(payload)
    } catch (error) {
      console.log(error);
      
      
    }
    setSelectedVideo(video)
    setShow(true)
    
    };

  const [data, setData] = useState([]);

  const getVideos = async () => {
    try {
      let response = await showVideo();
      if (200 <= response.status <= 300) {
        setData(response.data);
      } else {
        console.error(response.text);
      }
    } catch {
      console.error("error occured");
    }
  };
  useEffect(() => {
    getVideos()}, [allVideos,videoDeleteResponse]
  );

 const onDeleteClickVideo = async(id)=>{
  // console.log(id);
  
        try{
          await deleteVideo(id)
          getVideos()
        }
        catch(err){
            console.error(err);
            
        }
  }


  const onVideoDrag=(e,id)=>{
    e.dataTransfer.setData("videoID",id)
  }

  const onDragOverDiv=(e)=>{
    e.preventDefault();
  }

  const onVideoDrop = async (e)=>{
    let {categoryId,videoObj} =JSON.parse(e.dataTransfer.getData("fromCategoryVideo"))
    console.log(categoryId,videoObj);
    await uploadVideo(videoObj)
    getVideos()

    let apiResponse=await getSingleCategory(categoryId);
    let currentAllVideos = apiResponse.data.allVideos;
    let sortedVideos=currentAllVideos.filter((item)=>item.id!=videoObj.id)
    console.log("wsf",sortedVideos);
    const payload ={
      id:categoryId,
      categoryName:apiResponse.data.categoryName,
      allVideos:sortedVideos
    }

   let deleteResponse=  await updateCategory(categoryId,payload)
   setCategoryVideoResponseDelete(deleteResponse)
  }
  return (
    <div>
      <div onDragOver={(e)=>onDragOverDiv(e)} onDrop={(e)=>onVideoDrop(e)}>
        <h4>Allvideos</h4>
        <div className="mt-5 border border-1 rounded p-3" style={{ display: "flex ", flexWrap: "wrap", gap: "20px", width:"90%" }}>
          { data.length>0?data.map((obj, index) => (
            <div key={index}>
              <Card
                style={{
                  width: "14rem",
                  borderRadius: "20px 20px 0px 0px",
                  cursor: "pointer",
                }}
                draggable="true"
                onDragStart={(e)=>onVideoDrag(e,obj.id)}
               
              >
                <Card.Img
                  variant="top"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "20px 20px 0px 0px",
                  }}
                  src={obj.image}
                  onClick={()=>handleShow(obj)}
                />

                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title className="w-75">{obj.caption}</Card.Title>
                    <Button className="btn" onClick={()=>{onDeleteClickVideo(obj.id)}}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )):<div className="fs-3 text-danger">Add Some Videos</div>}
        </div>
      </div>


      {
        selectedVideo && <div>
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedVideo.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo.videoURL}&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
      }
      
    </div>
  );
};

export default Allvideos;
