import React from "react";
import { Link } from "react-router-dom";
import music from "../assets/music.webp";
import Card from "react-bootstrap/Card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Content = () => {
  return (
    <>
      <div className="container ">
        <div className="row align-items-center mt-5">
          <div className="col-6 mt-5">
            <h1>
              Welcome to{" "}
              <span className="text-warning fs-1 fw-bolder">Media Player</span>
            </h1>
            <p style={{textAlign:"justify"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              porro necessitatibus officiis iusto a placeat quo esse nobis
              quidem ratione nulla ullam voluptatem enim, rem incidunt dolor
              perferendis mollitia eos. Aut possimus temporibus ad repudiandae
              quis esse dolorum. Beatae quae eaque odit deleniti laudantium
              dolorem quam, fugit sed veniam magni.
            </p>
            <Link to={"/home"} className="btn btn-warning">
              Get Started
            </Link>
          </div>

            <div className="col-1"></div>

          <div className="col-5 text-center ">
            <img className="w-75" src={music} alt="" />
          </div>
        </div>

        {/* Features  Starts */}
        <div>
          <h1 className="text-center py-5">Features</h1> <hr />
          <div className="row">
            <div className="col-4 rounded">
              <Card style={{ width: "18rem", height: "20rem" }}>
                <Card.Img variant="top" src={image1} className="rounded-top" />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload, view and remove the videos..
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-4 rounded">
              <Card style={{ width: "18rem", height: "20rem" }}>
                <Card.Img variant="top" src={image2} className="rounded-top" />
                <Card.Body>
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>Categorise Videos.</Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-4 rounded">
              <Card style={{ width: "18rem", height: "20rem" }}>
                <Card.Img variant="top" src={image3} className="rounded-top" />
                <Card.Body>
                  <Card.Title>Managing History</Card.Title>
                  <Card.Text>
                    User can manage the watch history of all videos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        {/* Features  Ends */}

        <div className="row py-5 mt-5 border border-2 p-3 rounded">
          <div className="col-6">
            <h1 className="fw-bold">Simple, Fast and Powerful</h1>
            <p style={{textAlign:"justify"}}>
              <span className="fs-4 fw-semibold">Play Everything</span> : Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque
              cum reiciendis consequatur aspernatur unde?
            </p>
            <p style={{textAlign:"justify"}} >
              <span className="fs-4 fw-semibold">Categorise Videos</span> : Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque
              cum reiciendis consequatur aspernatur unde?
            </p>
            <p style={{textAlign:"justify"}}>
              <span className="fs-4 fw-semibold">Managing History</span> : Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ratione, neque
              cum reiciendis consequatur aspernatur unde?
            </p>
          </div>

          

          <div className="col-5 ms-3">
          <iframe width="500" height="315" src="https://www.youtube.com/embed/XHFzlyWVH8Q?si=kzC1Rdq_qpjbVpbd" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded"></iframe>

          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
