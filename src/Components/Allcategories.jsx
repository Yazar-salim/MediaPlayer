import  { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  createCategory,
  deleteCategories,
  deleteVideo,
  getCategory,
  getSingleVideo,
  updateCategory,
} from "../services/allAPI";
import { Card } from "react-bootstrap";


const Allcategories = ({setVideoDeleteResponse,categoryVideoResponseDelete}) => {
  const [show, setShow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [vdata,setVdata]=useState([])

  const handleClose = () => setShow(false);
  const handleCloseVideo = () => setShowVideo(false);
  const handleShow = () => setShow(true);
  const handleShowVideo = (video) =>{ 
    setSelectedVideo(video)
    setShowVideo(true);}

  const createNewCategory = async () => {
    if (categoryName) {
      try {
        const category = { categoryName, allVideos: [] };
        await createCategory(category);
        setShow(false);
        setCategoryName("")
        getCategoryDetails()
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please fill the category");
    }
  };

  useEffect(() => {
    getCategoryDetails();
  }, [categoryVideoResponseDelete]);

  const getCategoryDetails = async () => {
    try {
      let apiResponse = await getCategory();
      setCategoryList(apiResponse.data);
      // console.log(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await deleteCategories(id);
      getCategoryDetails();
    } catch (error) {
      console.error(error);
    }
  };

  const dragOverContent = (e) => {
    e.preventDefault();
  };

  const droped = async (e, catData) => {
    console.log(catData);

    let vId = e.dataTransfer.getData("videoId");

    try {
      let response = await getSingleVideo(vId);
      // setVdata(response.data)
      if (200 <= response.status <= 300) {
        catData.allVideos?.push(response.data);
        await updateCategory(catData.id, catData);
        getCategoryDetails();
        setVideoDeleteResponse(await deleteVideo(vId))
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleCategoryDrag=(e,categoryId,videoObj)=>{
    let  dataToTransfer={categoryId,videoObj}
    e.dataTransfer.setData("fromCategoryVideo",JSON.stringify(dataToTransfer))
  }
  return (
    <div>
      <div className="d-flex  align-items-center justify-content-between gap-5">
        <h4>All Categories</h4>
        <button className="btn btn-warning" onClick={handleShow}>
          +
        </button>
      </div>

      <div className="border border-2 mt-3  rounded p-3">
        {categoryList.length > 0
          ? categoryList.map((obj, index) => (
              <div
                key={index}
                onDrop={(e) => droped(e, obj)}
                onDragOver={(e) => {
                  dragOverContent(e);
                }}
              >
                <div className=" border border-2 mt-3 rounded p-3">
                  <div className="d-flex justify-content-between">
                    <h4>{obj.categoryName}</h4>
                    <button
                      className="btn py-1 px-2"
                      onClick={() => {
                        deleteCategory(obj.id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>

                  <div  className="d-flex gap-3 flex-wrap">

                      {
                   obj.allVideos?.map((a,index)=>(

                      <div key={index} draggable="true" onDragStart={(e)=>handleCategoryDrag(e,obj.id,a)}>
                      <Card
                      style={{
                        width: "14rem",
                        borderRadius: "20px 20px 0px 0px",
                        cursor: "pointer",
                      }}
                      // draggable="true"
                      // onDragStart={(e) => onVideoDrag(e, obj.id)}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "20px 20px 0px 0px",
                        }}
                        src={a.image}
                        onClick={() => handleShowVideo(a)}
                      />

                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <Card.Title className="w-75">
                            {a.caption}
                          </Card.Title>
                          {/* <Button
                            className="btn"
                            onClick={() => {
                              // onDeleteClickVideo(obj.id);
                            }}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </Button> */}
                        </div>
                      </Card.Body>
                    </Card>
                    </div>
                    ))
                    }


                  </div>
                </div>
              </div>
            ))
          : "no category Found"}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Details"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Category details"
              onChange={(e) => setCategoryName((e.target.value).toUpperCase())}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={createNewCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>



      {
        selectedVideo && <div>
        <Modal show={showVideo} onHide={handleCloseVideo} size="lg" centered>
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

export default Allcategories;
