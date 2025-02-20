import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { deleteHistory, getAllHistory } from "../services/allAPI";

const Watchhistory = () => {
  const [historyData, setHistoryData] = useState([]);

  const getHistory = async () => {
    try {
      let allhistory = await getAllHistory();
      // console.log(allhistory);

      setHistoryData(allhistory.data);
      console.log(history);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getHistory(), [];
  });

  const onDeleteClick = async (id) => {
    try {
      await deleteHistory(id);
      getHistory();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Watch History</h1>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            Back to Home
          </Link>
        </div>

        <Table
          striped
          rounded
          hover
          variant="dark"
          style={{ borderRadius: "20px 20px 0px 0px", overflow: "hidden" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Time Stamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {historyData.length > 0
              ? historyData.map((obj, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj.caption}</td>
                    <td>
                      {" "}
                      <Link
                        to={`https://www.youtube.com/watch?v=${obj.videoURL}`}
                      >
                        https://www.youtube.com/watch?v={obj.videoURL}
                      </Link>{" "}
                    </td>
                    <td>
                      {obj.formattedDate} {obj.id}
                    </td>
                    <td>
                      <button
                        onClick={()=>onDeleteClick(obj.id)}
                        className="btn py-1 px-2"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              : <div className="fs-3 text-danger fw-bold text-center">No History Found</div>}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Watchhistory;
