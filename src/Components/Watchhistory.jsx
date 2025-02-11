import React from "react";
import { Link } from "react-router-dom";
import {Table } from "react-bootstrap";

const Watchhistory = () => {
  return (
    <div>
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Watch History</h1>
          <Link to={"/home"} style={{textDecoration:"none"}}>Back to Home</Link>
        </div>

        <Table striped  rounded  hover variant="dark"  style={{borderRadius:"20px 20px 0px 0px" ,overflow:"hidden"}}>
          <thead >
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Time Stamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>1</td>
              <td>Title</td>
              <td>Link</td>
              <td>Stamp</td>
              <td><i className="fa-solid fa-trash"></i></td>
            </tr>
          <tr>
              <td>2</td>
              <td>Title</td>
              <td>Link</td>
              <td>Stamp</td>
              <td><i className="fa-solid fa-trash"></i></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Watchhistory;
