import { Link, Outlet, useLocation } from "react-router-dom";

import logo from '../assets/logo-white.svg';

import Text from "antd/es/typography/Text";
import { Divider, Flex, Image, Layout, Menu, theme } from "antd";
import { FilePenLine, House, LayoutList } from "lucide-react";

const { Header, Content, Sider } = Layout;

export default function AdminLayout() {
  const { pathname } = useLocation();

  const {token: { colorBgContainer }} = theme.useToken();

  const user = 'Usuário';

  const menuItems = [
    {
      key: '/admin',
      path: '/admin',
      label: 'Inicio',
      icon: <House />,
    },
    {
      key: '/admin/register',
      path: '/admin/register',
      label: 'Cadastro de vagas',
      icon: <FilePenLine />,
    },
    {
      key: '/admin/list',
      path: '/admin/list',
      label: 'Lista de vagas',
      icon: <LayoutList />,
    },
  ];

  return (
    <Layout>
      <Sider
        width={250}
        style={{height: '100vh', padding: '16px'}}
      >
        <Flex align="center" justify="center" gap={8} vertical style={{padding: '32px 0px'}}>
          <Image src={logo} preview={false} width={160}/>
        </Flex>
        <Divider style={{backgroundColor: colorBgContainer, opacity: '0.2'}} />
        <Menu
          theme='dark'
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems.map(item => ({
            key: item.key,
            icon: item.icon,
            label: (
              <Link to={item.path}>
                {item.label}
              </Link>
            ),
          }))}
        />
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
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};