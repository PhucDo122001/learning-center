import React, { useState, useEffect } from "react";
import { Footer, Home, Courses, User, Information, DetailCourse } from "../index";
import {
  DesktopOutlined,
  HomeFilled,
  TeamOutlined,
  UserOutlined,
  InfoOutlined,
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

// những items này sẽ được rander ra thành menu
let items = [];

const DefaultLayout = ({ isUser }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const getIdUser = localStorage.getItem("userId");
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setuser] = useState({});




  useEffect(() => {
    fetch(`http://localhost:3002/api/getOneUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: getIdUser }),
    })
      .then((res) => res.json())
      .then((res) => {
        setuser(res)
        if (res.role === "Admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, []);

  if (isAdmin) {
    items = [
      getItem("Trang Chủ", "/", <HomeFilled />),
      getItem("Khóa Học", "/courses", <DesktopOutlined />),
      getItem("Thông Tin", "/infromation", <InfoOutlined />),
      getItem("Quản lý user", "/user", <TeamOutlined />),
    ];
  } else {
    items = [
      getItem("Trang Chủ", "/", <HomeFilled />),
      getItem("Khóa Học", "/courses", <DesktopOutlined />),
      getItem("Thông Tin", "/infromation", <InfoOutlined />),
    ];
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
        position: "relative",
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
            <UserOutlined />
                
            <span style={{textTransform: 'uppercase'}}>Hi, {user.name}</span>
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
            <Route path="/infromation" element={<Information />} />
            <Route path="/course/detailcourse" element={<DetailCourse />} />
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
