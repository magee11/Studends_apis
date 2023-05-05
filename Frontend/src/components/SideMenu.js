import React from "react";
import axios from "axios";
import { Layout, Menu, Dropdown, message } from "antd";
import {
  UserOutlined,
  InfoCircleTwoTone,
  MinusCircleOutlined,
  PieChartOutlined,
  InfoCircleOutlined,
  DownOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;
const SideMenu = ({ collapse, setContent }) => {
  function handleClick(){
    axios
    .get("http://localhost:5000/api/v1/profile/")
    .then((data) => {
      // setallUsers(data.data);
      console.log("Success",data)
    })
    .catch((err) => console.log(err));
  }
  const navClick = (e) => {
    setContent(e?.key);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">My Profile</Menu.Item>
      <Menu.Item key="2">Leave request</Menu.Item>
    </Menu>
  );

  return (
    <Sider trigger={null} collapsible collapsed={collapse}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        onClick={(e) => navClick(e)}
      >
        {/* <Menu.Item key="logo" icon={<DesktopOutlined />}>
          <img
            src="https://i.pinimg.com/736x/f6/49/8d/f6498d0c35213a3e766e1d9fd27979cd.jpg"
            style={{ width: "150px", height: "60px" }}
          />
        </Menu.Item> */}
        <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item  onClick={handleClick} key="profile" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="user" icon={<DesktopOutlined />}>
          StudentUser
        </Menu.Item>
        <Menu.Item key="LeaveRequest" icon={<UserOutlined />}>
          CompanyList
        </Menu.Item>
        <Menu.Item key="notification" icon={<InfoCircleOutlined />}>
          Notification
        </Menu.Item>
        <Menu.Item key="logout" icon={<MinusCircleOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
