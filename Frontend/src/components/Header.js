import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Header } = Layout;

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()}/${current.getFullYear()}`;
const dt = current.toDateString();
const displaytime =
  current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

const HeaderPart = ({ collapsed, setCollapsed }) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {" "}
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        style: { width: "50px", fontSize: "25px" },
        onClick: () => setCollapsed(!collapsed),
      })}
      <h2 style={{ float: "right", marginRight: "8px" }}>
        DATE: {date}
        {/* <br /> TIME: {displaytime} */}
      </h2>
    </Header>
  );
};

export default HeaderPart;
