// import React, { useState } from "react";
// import { Button } from "antd";
// import { useSelector, useDispatch } from "react-redux";
// import { addNumber, removeNumber } from "../../redux/actions/profileActions";
// import "./index.css";

// const Profile = () => {
//   const dispatch = useDispatch();
//   const number = useSelector((state) => state?.profileReducer?.number);

//   const addFunction = () => {
//     dispatch(addNumber());
//   };
//   const removeFunction = () => {
//     if (number !== 0) dispatch(removeNumber());
//   };

//   return (
//     <div className="LeftContent">
//       <h3>Total </h3> {number} <br />
//       <Button onClick={addFunction}>Add</Button>
//       <Button onClick={removeFunction}>Remove</Button>
//     </div>
//   );
// };
// export default Profile;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Profile = () => {
  const [allUsers, setallUsers] = useState([]);

  // const getAllUsers = () => {
  //   axios
  //     .get("http://localhost:5000/api/v1/profile/")
  //     .then((data) => {
  //       setallUsers(data.data);
  //       console.log("Success")
  //     })
  //     .catch((err) => console.log(err));
  // };

  useEffect(() => {
    // debugger
    axios
      .get("http://localhost:5000/api/v1/profile/")
      .then((data) => {
        setallUsers(data.data);
        console.log("Success")
      })
      .catch((err) => console.log(err));
    // getAllUsers();
  }, [allUsers]);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/deleteuser?userid=` + id)
      .then((data) => {
        if (data?.data?.success == true) {
          alert(data?.data?.message);
          // getAllUsers();
        } else {
          alert("Network error. please try later");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="homepage">
      {console.log("getting",allUsers)}
      <div
        className="container"
        style={{ backgroundColor: "azure", width: "800px", margin: "auto" }}
      >
        <center>
          <h3>Home Page</h3>
          <a style={{ float: "right" }} href="/">
            Logout
          </a>
          <table>
            <tr>
              <th>Name</th>
              <th>Dept</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Action</th>
            </tr>
            {allUsers?.map((user) => {
              return (
                <tr>
                  <td>{user?.name}</td>
                  <td>{user?.Dept}</td>
                  <td>{user?.email}</td>
                  <td>{user?.password}</td>
                  <td>{user?.gender}</td>
                  <td>{user?.nationality}</td>
                  <td>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteUser(user?._id)}
                    >
                      Delete user
                    </button>
                    <button
                      style={{ cursor: "pointer", marginLeft: "25px" }}
                      onClick={() => {
                        window.location.href = `/edituser/${user?._id}`;
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </center>
      </div>
    </div>
  );
};

export default Profile;
