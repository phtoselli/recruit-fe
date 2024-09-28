import { Button, Col, Flex, Image, Row, Space } from "antd";
import { Link } from "react-router-dom";

import hero from './assets/hero.png';
import logo from './assets/logo-black.svg';
import mock1 from './assets/mock1.png';
import mock2 from './assets/mock2.png';
import mock3 from './assets/mock3.png';

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export default function App() {
  return (
    <Flex justify="center" style={{backgroundColor: '#fafafa'}}>
      <Row style={{width: '95vw', maxWidth: '1100px'}} gutter={0}>
        <Col span={24} style={{backgroundColor: '#fff', padding: '16px'}}>
          <Flex style={{padding: '16px'}} align="center" justify="space-between">
            <Image preview={false} src={logo} width={120} />

            <Space>
              <Link to="/login">
                <Button type="default" size="small" style={{padding: '8px 16px'}}>Fazer Login</Button>
              </Link>
              <Link to="/register">
                <Button type="primary" size="small" style={{padding: '8px 16px'}}>Cadastre-se</Button>
              </Link>
            </Space>
          </Flex>
        </Col>

        <Col span={24} style={{padding: '100px 0px', backgroundColor: '#fff'}}>
          <Row>
            <Col span={12} style={{padding: '40px'}}>
              <Title level={1}>Conectando talentos com oportunidades</Title>
              <Paragraph type="secondary">Descubra a Recruit Platform, uma solução inovadora que transforma o processo de recrutamento. Desenvolvida em React, nossa plataforma utiliza inteligência artificial para criar conexões mais eficientes entre empresas e candidatos.</Paragraph>
              <Link to='/register'>
                <Button type="primary">Cadastre-se</Button>
              </Link>
            </Col>
            <Col span={12}>
              <Image preview={false} src={hero} width={450} />
            </Col>
          </Row>
        </Col>

        {/* <Col span={24} style={{padding: '40px 0px'}}>
          Carrosse
        </Col> */}

        <Col span={24} style={{padding: '60px 0px'}}>
          <Row>
            <Col span={12}>
              <Flex align="center" justify="center">
                <Image preview={false} src={mock1} style={{objectFit: 'cover'}} width={300} />
              </Flex>
            </Col>
            <Col span={12} style={{padding: '40px'}}>
              <Title level={2}>🌟 Cadastre-se</Title>
              <Paragraph type="secondary">Crie sua conta rapidamente e tenha acesso a uma plataforma completa para gerenciar sua carreira. Preencha seu perfil e esteja pronto para ser descoberto!</Paragraph>
            </Col>
          </Row>
        </Col>

        <Col span={24} style={{padding: '60px 0px'}}>
          <Row>
            <Col span={12} style={{padding: '40px'}}>
              <Title level={2}>🔍 Procure uma Vaga</Title>
              <Paragraph type="secondary">Explore uma ampla lista de vagas disponíveis. Use filtros para encontrar a oportunidade perfeita que se encaixe no seu perfil e aspirações profissionais.</Paragraph>
            </Col>
            <Col span={12}>
              <Flex align="center" justify="center">
                <Image preview={false} src={mock2} style={{objectFit: 'cover'}} width={300} />
              </Flex>
            </Col>
          </Row>
        </Col>

        <Col span={24} style={{padding: '60px 0px'}}>
          <Row>
            <Col span={12}>
              <Flex align="center" justify="center">
                <Image preview={false} src={mock3} style={{objectFit: 'cover'}} width={300} />
              </Flex>
            </Col>
            <Col span={12} style={{padding: '40px'}}>
              <Title level={2}>✉️ Candidate-se</Title>
              <Paragraph type="secondary">Encontre a vaga ideal e candidate-se com apenas alguns cliques. Aumente suas chances de sucesso e inicie sua jornada rumo ao emprego dos seus sonhos!</Paragraph>
            </Col>
          </Row>
        </Col>

        <Col span={24} style={{padding: '80px 0px'}}>
          <Flex vertical align="center" justify="center" style={{padding: '80px', backgroundColor: '#fff'}} gap={16}>
            <Title level={2}>Junte-se à Revolução do Recrutamento</Title>
            <Paragraph type="secondary" style={{textAlign: "center"}}>
                Transforme a forma como você contrata e é contratado. Acelere seu processo de recrutamento e encontre as melhores oportunidades ou talentos com facilidade. Experimente a Recruit Platform hoje!
            </Paragraph>
            <Link to="/register">
              <Button type="primary" style={{padding: '24px 40px'}}>Comece agora</Button>
            </Link>
          </Flex>
        </Col>

        <Col span={24} style={{padding: '100px 0px'}}>
          <Flex vertical align="center" justify="center" style={{textAlign: 'center'}}>
            <Title level={4}>IA Recruta</Title>
            <Paragraph type="secondary">Conectando talentos com oportunidades.</Paragraph>
            <Paragraph>© 2024 - Todos os direitos reservados.</Paragraph>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
}
