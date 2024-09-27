import Text from "antd/es/typography/Text";

import { Divider, Flex, Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

export default function AdminLayout({children}: {children?: React.ReactElement}) {
  const {token: { colorBgContainer }} = theme.useToken();

  const user = 'Pedro';

  const menuItems = [
    {
      key: 'home',
      icon: '',
      label: 'Inicial',
    },
    {
      key: 'register',
      icon: '',
      label: 'Cadstrar vaga',
    },
    {
      key: 'list',
      icon: '',
      label: 'Listagem de vagas',
    },
  ];

  return (
    <Layout>
      <Sider
        style={{height: '100vh', padding: '16px 4px'}}
      >
        <Flex align="center" justify="center" gap={8} vertical>
          <Text>Recruta.AI</Text>
        </Flex>
        <Divider>v1.0</Divider>
        <Menu theme='dark' mode="inline" defaultSelectedKeys={['home']} items={menuItems} />
      </Sider>

      <Layout>
        <Header style={{backgroundColor: colorBgContainer, padding: '16px'}}>
          <Flex>
            <Text>Olá {user}, bem vindo(a) de volta!</Text>
          </Flex>
        </Header>

        <Content style={{ padding: '16px' }}>
          <div
            style={{
              padding: 24,
              height: '100%',
              background: colorBgContainer,
              borderRadius: '8px'
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};