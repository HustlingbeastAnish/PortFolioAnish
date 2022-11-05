import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Codeforces() {
  // Initialized with empty array then afterwards we will set the data using setusers
  const [users, setusers] = useState({});
  const [handle, sethandle] = useState("Hustlingbeast_Anish");
  useEffect(() => {
    axios
      .get(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => {
        setusers(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handle]);

  return (
    <>
      <div>
        <input
          type="text"
          value={handle}
          onChange={(e) => {
            sethandle(e.target.value);
          }}
          placeholder="Please Enter Your Codeforces Handle"
        />
        {
          users && (
            <div className="container">
              <p>{users.maxRating}</p>
            </div>
          )
          // </>
        }
      </div>
    </>
  );
}

export default Codeforces;
