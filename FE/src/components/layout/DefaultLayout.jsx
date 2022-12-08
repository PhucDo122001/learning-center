import React, { useState } from "react";
import { Footer, Home,Courses, User } from "../index";
import {
  DesktopOutlined,
  HomeFilled,
  TeamOutlined,
  UserOutlined,
  InfoOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Trang Chủ", "/", <HomeFilled />),
  getItem("Khóa Học", "/courses", <DesktopOutlined />),
  getItem("Lớp Của Tôi", "/user", <TeamOutlined />),
  getItem("Thông Tin", "/info", <InfoOutlined />),
];

const DefaultLayout = ({ isUser }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
        position: 'relative',

      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: "16px 8px",
            textAlign: "center",

          }}
        >
            <div
              style={{
                height: 32,
                margin: 16,
                textAlign: "center",
                color: "white",
                fontSize: 22,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <UserOutlined /><span>Hi, Name</span>
              
            </div>
           
        </div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={(info) => {
            navigate(`${info.key}`);
          }}
        >
          {/* <Menu.Item key="1">
            <Link to='/'> <HomeFilled /> Home </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/courses'> <DesktopOutlined /> Courses</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/class'>Class</Link>
          </Menu.Item> */}
        </Menu>
        
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        />
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
