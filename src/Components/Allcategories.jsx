import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { createCategory, deleteCategories, getCategory, getSingleVideo } from "../services/allAPI";

const Allcategories = () => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createNewCategory = async () => {
    if (categoryName) {
      try {
        const category = { categoryName, allVideos: [] };
        await createCategory(category);
        setShow(false);
        setCategoryName("");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please fill the category");
    }
  };

  useEffect(() => {
    getCategoryDetails();
  }, [categoryList]);

  const getCategoryDetails = async () => {
    try {
      let apiResponse = await getCategory();
      setCategoryList(apiResponse.data);
      // console.log(apiResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory=async(id)=>{
    try {
      await deleteCategories(id)
      getCategoryDetails()
    } catch (error) {
      console.error(error);
      
    }
  }


  const dragOverContent=(e)=>{
    e.preventDefault();
  }


  const droped = async(e,data)=>{
    console.log(data);
    
     let vId=(e.dataTransfer.getData("videoId"));

      let response = await getSingleVideo(vId)
      console.log(response.data);
      
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
      {categoryList.length>0?
      
      categoryList.map((obj, index) => (
        <div key={index}  onDrop={(e)=>droped(e,obj)} onDragOver={(e)=>{dragOverContent(e)}}>
          <div className=" border border-2 mt-3 rounded p-3">
            <div className="d-flex justify-content-between">
              <h4>{obj.categoryName}</h4>
              <button className="btn py-1 px-2" onClick={()=>{deleteCategory(obj.id)}}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      )):"no category Found"}
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
              onChange={(e) => setCategoryName(e.target.value)}
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
    </div>
  );
};

export default Allcategories;
