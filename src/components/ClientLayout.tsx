import { Outlet } from 'react-router-dom';
import logo from '../assets/logo-white.svg';

import { Col, Image, Layout, Row, theme } from "antd";

const { Header, Content } = Layout;

export default function ClientLayout() {
  const {token: { colorBgContainer }} = theme.useToken();

  return (
    <Layout>
      <Header>
        <Row>
          <Col>
            <Image src={logo} preview={false} width={120} />
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