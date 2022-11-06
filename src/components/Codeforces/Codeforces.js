import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Codeforces.css";

function Codeforces() {
  const [handle, sethandle] = useState("Hustlingbeast_Anish");
  const [users, setusers] = useState([{}]);

  const fetchdetails = () => {
    axios
      .get(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => {
        setusers(res.data.result[0]);
        console.log(res.data.result[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div id="Main">
        <div className="container d-flex  flex-column align-items-center border border-dark">
          <h2 className="topheading">Get Your Codeforces Details Here</h2>
          <div className="container d-flex flex-row">
            <div class="form-group p-1 ">
              <label for="exampleInputEmail1">CodeForces UserName</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Handle Here"
                onChange={(e) => {
                  sethandle(e.target.value);
                }}
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your details
              </small>
            </div>
            <button
              type="button"
              class="btn btn-sm btn-primary p-2 border border-dark mt-4"
              onClick={fetchdetails}
              style={{ width: "47px", borderRadius: "12px", height: "45px" }}
            >
              Find
            </button>
          </div>
          <div className="container m-2">
            <div
              class="card border border-dark"
              className="stats"
              style={{ width: "20rem" }}
            >
              <img
                src={users.titlePhoto}
                class="card-img-top"
                alt="..."
                id="userimage"
              />
              <div class="card-body mb-3 border border-dark">
                <div className="container">
                  <h5>
                    Name: {users.firstName} {users.lastName}
                  </h5>
                  <h5>Title: {users.rank}</h5>
                  <h5>Current Rank: {users.maxRank}</h5>
                  <h5>Rating: {users.rating}</h5>
                  <h5>Highest Rating: {users.maxRating}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Codeforces;
