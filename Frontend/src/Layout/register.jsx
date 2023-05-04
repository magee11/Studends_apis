import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [dept, setdept] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMsg, setRegisterMsg] = useState("");
  const [Phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [sslc, setSslc] = useState("");
  const [hsc, setHsc] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [Placement, setPlacement] = useState("");
  const [Address, setAddress] = useState("");
  const [rollNo, setRollNo] = useState("");

  const [nameError, setnameError] = useState(false);
  const [nameErrorMsg, setnameErrorMsg] = useState("");
  const [deptError, setdeptError] = useState(false);
  const [deptErrorMsg, setdeptErrorMsg] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [AddressError, setAddressError] = useState(false);
  const [AddressErrorMsg, setAddressErrorMsg] = useState("");
  const [PhoneError, setPhoneError] = useState(false);
  const [PhoneErrorMsg, setPhoneErrorMsg] = useState("");
  const [roleeError, setRoleeError] = useState(false);
  const [roleeErrorMsg, setRoleErrorMsg] = useState("");
  const [sslcError, setSslcError] = useState(false);
  const [SslcErrorMsg, setSslcErrorMsg] = useState("");
  const [hscError, setHscError] = useState(false);
  const [hscErrorMsg, setHscErrorMsg] = useState("");
  const [cgpaError, setCgpaError] = useState(false);
  const [cgpaErrorMsg, setCgpaErrorMsg] = useState("");
  const [PlacementError, setPlacementError] = useState(false);
  const [PlacementErrorMsg, setPlacementErrorMsg] = useState("");
  const [RollNoError, setRollNoError] = useState(false);
  const [RollNoErrorMsg, setRollNoErrorMsg] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const getRegister = (e) => {
    e.preventDefault();
    if (name == "") {
      setnameError(true);
      setnameErrorMsg("Enter your name");
    }
    if (dept == "") {
      setdeptError(true);
      setdeptErrorMsg("Enter your dept");
    }
    if (rollNo == "") {
      setRollNoError(true);
      setRollNoErrorMsg("Please enter your roll number");
    }
    if (email == "") {
      setEmailError(true);
      setEmailErrorMsg("Enter your email");
    }
    if (password == "") {
      setPasswordError(true);
      setPasswordErrorMsg("Enter your password");
    }
    if (Address == "") {
      setAddressError(true);
      setAddressErrorMsg("Enter your Address");
    }
    if (Phone === "") {
      setPhoneError(true);
      setPhoneErrorMsg("Please Enter your phone number");
    }
    if (Placement == "") {
      setPlacementError(true);
      setPlacementErrorMsg("Placed or not");
    }
    if (cgpa == "") {
      setCgpaError(true);
      setCgpaErrorMsg("please enter your cgpa");
    }
    if (sslc == "") {
      setSslcError(true);
      setSslcErrorMsg("please enter your sslc mark");
    }
    if (hsc == "") {
      setHscError(true);
      setHscErrorMsg("Please enter your hsc mark");
    }
    if (role == "") {
      setRoleeError(true);
      setRoleErrorMsg("please enter your role");
    } else if (
      name != "" &&
      dept != "" &&
      email != "" &&
      password != "" &&
      Address != "" &&
      Phone != "" &&
      Placement != "" &&
      sslc != "" &&
      hsc != "" &&
      cgpa != "" &&
      role != ""
    ) {
      let userObj = {
        Name: name,
        Dept: dept,
        Email: email,
        Password: password,
        Roll_no: rollNo,
        Address: Address,
        Placement: Placement,
        Role: role,
        SSLC: sslc,
        HSC: hsc,
        CGPA: cgpa,
        Phone: Phone,
      };
      console.log("====================================");
      console.log(userObj);
      console.log("====================================");
      axios
        .post("http://localhost:5000/api/v1/register", userObj)
        .then((data) => {
          console.log(data.data);
          setRegisterMsg(data.data);
          if (data?.data?.success == true) {
            setSuccessMsg(data?.data?.message);
            window.location.href = "/login";
            // setTimeout(() => {
            //   window.location.href = "/login";
            // }, 0);
          } else {
            setSuccessMsg("Network error.. try later");
          }
        })
        .catch((err) => console.log(err));
      console.log("====================================");
      console.log(userObj);
      console.log("====================================");
    }
  };

  return (
    <div className="container">
      <header className="loginHeader">
        <h1
          style={{
            color: "white",
            marginTop: "-3px",
            fontSize: "50px",
            marginLeft: "14px",
          }}
        >
          SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY
        </h1>
      </header>
      <br />
      <div className="content">
        <form className="form2">
          <div className="clg-logo">
            <br />
            <img
              style={{
                height: "150px",
                marginLeft: "100px",
              }}
              src="data:image/jpeg;base64,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"
            ></img>
          </div>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => {
              if (e.target.value != "") {
                setnameError(false);
              } else if (e.target.value == "") {
                setnameError(true);
                setnameErrorMsg("Enter your name");
              }
              setName(e.target.value);
            }}
            placeholder="username"
            className="input2"
          />
          <br />
          {nameError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {nameErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={rollNo}
            onChange={(e) => {
              if (e.target.value != "") {
                setRollNoError(false);
              } else if (e.target.value == "") {
                setRollNoError(true);
                setRollNoErrorMsg("Enter your name");
              }
              setRollNo(e.target.value);
            }}
            placeholder="roll number"
            className="input2"
          />
          <br />
          {RollNoError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {RollNoErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={dept}
            onChange={(e) => {
              if (e.target.value != "") {
                setdeptError(false);
              } else if (e.target.value == "") {
                setdeptError(true);
                setdeptErrorMsg("Enter your dept");
              }
              setdept(e.target.value);
            }}
            placeholder="department"
            className="input2"
          />
          <br />
          {deptError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {deptErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => {
              if (e.target.value != "") {
                setEmailError(false);
              } else if (e.target.value == "") {
                setEmailError(true);
                setEmailErrorMsg("Enter your email");
              }
              setEmail(e.target.value);
            }}
            placeholder="Email id"
            className="input2"
          />
          <br />
          {emailError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {emailErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={password}
            onChange={(e) => {
              if (e.target.value != "") {
                setPasswordError(false);
              } else if (e.target.value == "") {
                setPasswordError(true);
                setPasswordErrorMsg("Enter your password");
              }
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="input2"
          />
          <br />
          {passwordError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {passwordErrorMsg}
            </span>
          )}
          <br />

          <input
            type="text"
            value={Phone}
            onChange={(e) => {
              if (e.target.value !== "") {
                setPhoneError(false);
              } else if (e.target.value === "") {
                setPhoneError(true);
                setPhoneErrorMsg("Enter your phone number");
              }
              setPhone(e.target.value);
            }}
            placeholder="Phone"
            className="input2"
          />
          <br />
          {PhoneError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {PhoneErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={role}
            onChange={(e) => {
              if (e.target.value != "") {
                setRoleeError(false);
              } else if (e.target.value == "") {
                setRoleeError(true);
                setRoleErrorMsg("Enter your role");
              }
              setRole(e.target.value);
            }}
            placeholder="Role"
            className="input2"
          />
          <br />
          {roleeError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {roleeErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={Placement}
            onChange={(e) => {
              if (e.target.value != "") {
                setPlacementError(false);
              } else if (e.target.value == "") {
                setPlacementError(true);
                setPlacementErrorMsg("Enter your are plced or not");
              }
              setPlacement(e.target.value);
            }}
            placeholder="Placement"
            className="input2"
            // style={{border: PlacementError ? "2px solid red" : "none"}}
          />
          <br />
          {PlacementError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {PlacementErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={Address}
            onChange={(e) => {
              if (e.target.value != "") {
                setAddressError(false);
              } else if (e.target.value == "") {
                setAddressError(true);
                setAddressErrorMsg("Enter your are plced or not");
              }
              setAddress(e.target.value);
            }}
            placeholder="Address"
            className="input2"
            // style={{border: AddressError ? "2px solid red" : "none"}}
          />
          <br />

          {AddressError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {AddressErrorMsg}
            </span>
          )}
          <br />
          <input
            type="number"
            value={sslc}
            onChange={(e) => {
              if (e.target.value != "") {
                setSslcError(false);
              } else if (e.target.value == "") {
                setSslcError(true);
                setSslcErrorMsg("Enter your are plced or not");
              }
              setSslc(e.target.value);
            }}
            placeholder="sslc"
            className="input2"
            // style={{border: sslcError ? "2px solid red" : "none"}}
          />
          <br />

          {sslcError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {SslcErrorMsg}
            </span>
          )}
          <br />
          <input
            type="number"
            value={hsc}
            onChange={(e) => {
              if (e.target.value != "") {
                setHscError(false);
              } else if (e.target.value == "") {
                setHscError(true);
                setHscErrorMsg("Enter your are plced or not");
              }
              setHsc(e.target.value);
            }}
            placeholder="hsc"
            className="input2"
            // style={{border: hscError ? "2px solid red" : "none"}}
          />
          <br />

          {hscError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {hscErrorMsg}
            </span>
          )}
          <br />
          <input
            type="text"
            value={cgpa}
            onChange={(e) => {
              if (e.target.value != "") {
                setCgpaError(false);
              } else if (e.target.value == "") {
                setCgpaError(true);
                setCgpaErrorMsg("Enter your are plced or not");
              }
              setCgpa(e.target.value);
            }}
            placeholder="cgpa"
            className="input2"
            // style={{border: emailError ? "2px solid red" : "none"}}
          />
          <br />

          {cgpaError && (
            <span style={{ color: "red", marginLeft: "100px" }}>
              {cgpaErrorMsg}
            </span>
          )}
          <br />
          <button
            className="reg-btn"
            style={{ cursor: "pointer" }}
            onClick={getRegister}
          >
            Register
          </button>
          <br />
          <span style={{ color: "green", fontSize: "20px" }}>{successMsg}</span>
          {}
          <br />
          <div style={{ color: "black" }}>{registerMsg}</div>
          {
            <a href="/login" style={{ color: "darkgreen" }}>
              Go to Login
            </a>
          }
        </form>
      </div>
    </div>
  );
};
export default Register;
