import React from "react";
import {
  Card,
  Col,
  Row,
  DownOutlined,
  Progress,
  Tooltip,
  Button,
  Menu,
  Dropdown,
  message,
} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import "./partials/styles.css";
const Dashboard = () => {
  const Calc = (total, percent) => {
    return Math.round((100 * percent) / total);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  // const menu = (
  //   <Menu onClick={handleMenuClick}>
  //     <Menu.Item key="1">Projects Active</Menu.Item>
  //     <Menu.Item key="2">Projects completed</Menu.Item>
  //   </Menu>
  // );
  return (
    <div
      className="site-card-border-less-wrapper"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      <Card
        title="IT"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>BOYS - 40</p> <p>GIRLS - 13</p>{" "}
        <p>
          <b>Total - 53</b>
        </p>
        <div>
          <Tooltip title="BOYS">
            <Progress percent={Calc(53, 40)} success={{ percent: Calc(53, 40) }} />
          </Tooltip>

          <Tooltip title="GIRLS">
            <Progress percent={Calc(53, 13)} success={{ percent: Calc(53, 13) }} />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="IT"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>PLACEMENT STUDENTS - 50</p> <p>NON-PLACEMENT STUDENTS - 3</p>
        <p>
          <b>Total - 53 </b>
        </p>
        <div>
          <Tooltip title="PLACEMENT STUDENTS">
            <Progress
              percent={Calc(53, 50)}
              success={{ percent: Calc(53,50) }}
            />
          </Tooltip>

          <Tooltip title="NON-PLACEMENT STUDENTS">
            <Progress
              percent={Calc(53, 3)}
              success={{ percent: Calc(53, 3) }}
            />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="IT"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>PLACED - 48</p> <p>NON-PLACED - 2</p> 
        <p>
          <b>Total - 50</b>
        </p>
        <div>
          <Tooltip title="PLACED">
            <Progress
              percent={Calc(50, 48)}
              success={{ percent: Calc(50, 48) }}
            />
          </Tooltip>

          <Tooltip title="NON PLACED">
            <Progress
              percent={Calc(50, 2)}
              success={{ percent: Calc(50, 2) }}
            />
          </Tooltip>
        </div>
      </Card>
      <Card
        title="IT"
        bordered={false}
        style={{ width: 250, height: 300, margin: "auto" }}
      >
        <p>OVERALL - 48/50</p>
        <div>
          <Tooltip title="OVERALL">
            <Progress
              percent={Calc(50, 48)}
              success={{ percent: Calc(50, 48) }}
            />
          </Tooltip>
        </div>
      </Card>
      <br />

      <Card
        title="PROGRESS"
        bordered={false}
        style={{ width: 1100, marginTop: 40, marginLeft: 30 }}
      >
        <h4>2018 - 2022:</h4>
        <Progress percent={80} steps={7} />
        <br />
        <h4>2019 - 2023:</h4>
        <Progress percent={90} steps={9} />

      </Card>

        {/* <div className="site-card-border-less-wrapper">
          <Card
            title="PROJECTS"
            bordered={false}
            style={{ width: 1100, marginTop: 40 }}
          >
            <Dropdown overlay={menu}>
              <Button>Project</Button>
            </Dropdown>
          </Card>
        </div> */}
    </div>
  );
};

export default Dashboard;
