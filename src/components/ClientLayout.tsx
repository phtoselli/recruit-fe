import { Outlet, redirect, useNavigate } from "react-router-dom";

import logo from "../assets/logo-white.svg";
import Text from "antd/es/typography/Text";

import { Button, Col, Flex, Image, Layout, Row, theme } from "antd";

const { Header, Content } = Layout;

export default function ClientLayout() {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = JSON.parse(localStorage.getItem("user")!);

  if (!user) {
    redirect("/login");
  }

  const sair = () => {
    localStorage.removeItem("user");
    navigate(`/login`);
  };

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={12}>
            <Image src={logo} preview={false} width={120} />
          </Col>
          <Col span={12}>
            <Flex align="center" justify="end" style={{ height: "100%" }}>
              <Text style={{ color: "#f0f0f0" }}>
                Olá {user?.name}, seja bem vindo(a)!
              </Text>
              <Button onClick={sair} style={{ marginLeft: "20px" }}>
                Sair
              </Button>
            </Flex>
          </Col>
        </Row>
      </Header>
      <Content>
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
  );
}
