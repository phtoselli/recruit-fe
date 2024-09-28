import { Outlet, redirect } from 'react-router-dom';

import logo from '../assets/logo-white.svg';
import Text from 'antd/es/typography/Text';

import { Col, Flex, Image, Layout, Row, theme } from "antd";

const { Header, Content } = Layout;

export default function ClientLayout() {
  const {token: { colorBgContainer }} = theme.useToken();

  const user = JSON.parse(localStorage.getItem('user')!);

  if (!user) {
    redirect("/login");
  }

  return (
    <Layout>
      <Header>
        <Row>
          <Col span={12}>
            <Image src={logo} preview={false} width={120} />
          </Col>
          <Col span={12}>
            <Flex align='center' justify='end' style={{height: '100%'}}>
              <Text style={{color: '#f0f0f0'}}>Olá {user?.name}, seja bem vindo(a)!</Text>
            </Flex>
          </Col>
        </Row>
      </Header>
      <Content>
        <div
          style={{
            padding: 24,
            height: '100%',
            background: colorBgContainer,
            borderRadius: '8px'
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}