import React from "react";
import { Card, Button, button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  addNumber,
  removeNumber,
} from "../../redux/actions/leaveRequestActions";
// import mail from '../../../backend/mail'
// import nodemailer from 'nodemailer';



const LeaveRequest = () => {
  const dispatch = useDispatch();
  const number = useSelector((leave) => leave.LeaveRequest.number);



  const addFunction = () => {
    if (number !== 3) dispatch(addNumber());
  };

  const removeFunction = () => {
    if (number !== 0) dispatch(removeNumber());
  };
  return (
    <div>
    <Card
      title="COMPANY LIST"
      bordered={false}
      style={{ width: 1000, marginTop: 20 }}
    >
     <h2>CTS</h2>
     <p>CTS onboarding on next week</p>
      <br />
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          boxSizing: 30,
        }}
      >
        APPLY
      </Button>
      <Button
        style={{
          margin: 30,
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
        }}
      >
        CANCEL
      </Button>
    </Card>
    <hr></hr>
    <Card
      title="COMPANY LIST"
      bordered={false}
      style={{ width: 1000, marginTop: 20 }}
    >
     <h2>IBM</h2>
     <p>IBM onboarding</p>
      <br />
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          boxSizing: 30,
        }}
      >
        APPLY
      </Button>
      <Button
        style={{
          margin: 30,
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
        }}
      >
        CANCEL
      </Button>
    </Card>
    <hr></hr>
    <Card
      title="COMPANY LIST"
      bordered={false}
      style={{ width: 1000, marginTop: 20 }}
    >
     <h2>CES</h2>
     <p>CES onboarding </p>
      <br />
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          boxSizing: 30,
        }}
      >
        APPLY
      </Button>
      <Button
        style={{
          margin: 30,
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
        }}
      >
        CANCEL
      </Button>
    </Card>
    <hr></hr>
    <Card
      title="COMPANY LIST"
      bordered={false}
      style={{ width: 1000, marginTop: 20 }}
    >
     <h2>HCL</h2>
     <p>HCL onboarding</p>
      <br />
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          boxSizing: 30,
        }}
      >
        APPLY
      </Button>
      <Button
        style={{
          margin: 30,
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
        }}
      >
        CANCEL
      </Button>
    </Card>
    <hr></hr>
    <Card
      title="COMPANY LIST"
      bordered={false}
      style={{ width: 1000, marginTop: 20 }}
    >
     <h2>CTS</h2>
     <p>CTS onboarding on next week</p>
      <br />
      <Button
        style={{
          cursor: "pointer",
          color: "white",
          backgroundColor: "green",
          boxSizing: 30,
        }}
      >
        APPLY
      </Button>
      <Button
        style={{
          margin: 30,
          cursor: "pointer",
          backgroundColor: "red",
          color: "white",
        }}
      >
        CANCEL
      </Button>
    </Card>
    <hr></hr>
    </div>
  );
};
export default LeaveRequest;

