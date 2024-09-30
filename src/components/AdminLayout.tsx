import {
  Link,
  Outlet,
  redirect,
  useLocation,
  useNavigate,
} from "react-router-dom";

import logo from "../assets/logo-white.svg";

import Text from "antd/es/typography/Text";
import { Button, Divider, Flex, Image, Layout, Menu, theme } from "antd";
import { FilePenLine, House, LayoutList, LogOut } from "lucide-react";

const { Header, Content, Sider } = Layout;

export default function AdminLayout() {
  const { pathname } = useLocation();
  const user = JSON.parse(localStorage.getItem("user")!);

  if (!user) {
    redirect("/login");
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: "/admin/list",
      path: "/admin/list",
      label: "Lista de vagas",
      icon: <LayoutList />,
    },
    {
      key: "/admin/register",
      path: "/admin/register",
      label: "Cadastro de vagas",
      icon: <FilePenLine />,
    },

    {
      key: "/",
      path: "/",
      label: "Sair",
      icon: <LogOut />,
    },
  ];

  return (
    <Layout>
      <Sider width={250} style={{ height: "100vh", padding: "16px" }}>
        <Flex
          align="center"
          justify="center"
          gap={8}
          vertical
          style={{ padding: "32px 0px" }}
        >
          <Image src={logo} preview={false} width={160} />
        </Flex>
        <Divider
          style={{ backgroundColor: colorBgContainer, opacity: "0.2" }}
        />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: <Link to={item.path}>{item.label}</Link>,
          }))}
        />
      </Sider>

      <Layout>
        <Header style={{ backgroundColor: colorBgContainer, padding: "16px" }}>
          <Flex>
            <Text>Olá {user?.name}, bem vindo(a) de volta!</Text>
          </Flex>
        </Header>

        <Content style={{ padding: "16px" }}>
          <div
            style={{
              padding: 24,
              height: "100%",
              background: colorBgContainer,
              borderRadius: "8px",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
