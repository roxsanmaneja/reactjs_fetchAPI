import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ShowVenues = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sis.materdeicollege.com/api/venues")
      .then((res) => res.json())
      .then((res) => setData(res.venues));
  }, []);

  const showVenue = (venue) => {
    navigate(`/api/venue/${venue}`);
  };
  
  return (
    <>
    <div className="row p-3 ms-5">
    <h1 className="text-center m-3 text-danger">List of Venues</h1>
    {Object.keys(data).map((venue, index) => {
            return (
              <div className="card col-md-3 mb-2 ms-5 shadow shadow-dark">
              <div className="card-body p-2" key={index}>
                <tr>
                  <td>ID: </td>
                  <th>{data[venue].id}</th>
                </tr>
                <tr>
                  <td>Name: </td>
                  <th>{data[venue].name}</th>
                </tr>
                <tr>
                  <td>Building: </td>
                  <th>{data[venue].building}</th>
                </tr>
                <tr>
                  <td>Capacity: </td>
                  <th>{data[venue].capacity}</th>
                </tr>
                <div className="btn btn-warning" onClick={() => { showVenue(data[venue].id);
                    
                    }}>View</div>
              </div>
              </div>
            );
          })}
    </div>
      </>
  );
        }

export default ShowVenues;