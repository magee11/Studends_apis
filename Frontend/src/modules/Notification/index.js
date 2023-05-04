import React from "react";
import { Card, Calendar } from "antd";

// import { Calendar } from 'antd';


const Notification = () => {
  const approve = () => {};
  const deny = () => {};
    const onPanelChange = (value, mode) => {
      console.log(value.format('YYYY-MM-DD'), mode);
    }
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="NOTIFICATION" bordered={false} style={{ width: 1000 }}>
        <p>
          Accenture is requesting for on campus
        </p>
        <br />
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
          }}
        >
          APPROVE
        </button>
        <button
          style={{
            margin: 30,
            cursor: "pointer",
            color: "white",
            backgroundColor: "red",
          }}
        >
          DENIED
        </button>
      </Card>
      <Card
        title="NOTIFICATION"
        bordered={false}
        style={{ width: 1000, marginTop: 20 }}
      >
        <p>Zoho requesting for on campus</p>
        <br />
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={approve}
        >
          APPROVE
        </button>
        <button
          style={{
            margin: 30,
            cursor: "pointer",
            color: "white",
            backgroundColor: "red",
          }}
          onClick={deny}
        >
          DENIED
        </button>
      </Card> <br /><br />
      <Calendar onPanelChange={onPanelChange} />

    </div>
  );
};

export default Notification;
