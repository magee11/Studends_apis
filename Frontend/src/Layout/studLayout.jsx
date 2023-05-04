import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";

// components
import StudSideMenu from "../components/studSidemenu";
import Header from "../components/Header";

// modules
// import User from "../modules/StudentUser";
import Notification from "../modules/Notification";
import Dashboard from "../modules/Dashboard";
import Profile from "../modules/Profile";
import LeaveRequest from "../modules/CompanyList";
import Login from './login';

import "../App.css";

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent("dashboard");
  }, []);

  const getContent = (item) => {
    // if (item == "user") {
    //   return <User />;
    // }
    if (item == "notification") {
      return <Notification />;
    }
    if (item == "dashboard") {
      return <Dashboard />;
    }
    if (item == "Profile") {
      return <Profile />;
    }
    if (item == "LeaveRequest") {
      return <LeaveRequest />;
    }
    if (item == "logout") {
      return <Login />
    }
  };

  const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

  return (
    <Layout style={{ height: "100", marginTop: "5px" }}>
      <StudSideMenu collapse={collapsed} setContent={setContent} />
      <Layout className="site-layout">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Breadcrumb style={{ marginLeft: "25px", marginTop: "15px" }}>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Breadcrumb.Item>{capitalize(content)}</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {getContent(content)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;