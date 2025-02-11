import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-5">
            <i className="fa-solid fa-music fs-2 me-1"></i>
            <span>Music Player</span>
            <p className="mt-3">
              Designed and built with all the love in the world by the Luminar
              team with the help of our contributors.
            </p>
            <p>Code liscensed Luminar, docs CC By 3.0</p>
            <p>Currently v5.3.2.0</p>
          </div>

          <div className="col-2">
            <h4>Links</h4>
            <Link to={"/"} style={{textDecoration:"none"}}>Landing Page</Link><br />
            <Link to={"/home"} style={{textDecoration:"none"}}>Home Page</Link><br />
            <Link to={"/history"} style={{textDecoration:"none"}}>History Page</Link>
          </div>

          <div className="col-2">
            <h4>Guides</h4>
            <Link to={"/"} style={{textDecoration:"none"}}>React</Link><br />
            <Link to={"/"} style={{textDecoration:"none"}}>React Router</Link><br />
            <Link to={"/"} style={{textDecoration:"none"}}>React Bootstrap</Link>
          </div>

          <div className="col-3 ">
            <h4 >Contact</h4>
            <input className="border-0 p-2 rounded me-2" style={{outline:"none"}} type="text "  placeholder="Enter Your Email Here"/>
            <i className="fa-solid fa-arrow-right text-white px-3 py-2 rounded " style={{backgroundColor:"violet" ,cursor:"pointer"}}></i>

            <div className="d-flex gap-4 mt-3">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-solid fa-phone"></i>
            </div>
            
          </div>
        </div>
        <div className="row text-center">
        <p style={{fontSize:"0.8rem",fontWeight:"500"}}>Copyright © July 2024 Batch,Media Player App, Built with React</p>
      </div>
      </div>

    
    </div>
  );
};

export default Footer;
