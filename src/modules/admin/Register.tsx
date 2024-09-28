import { Button, Card, Col, Divider, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function Register() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12} style={{ height: "100%" }}>
        <Card
          title="Cadastrar Vaga"
          style={{ padding: "24px", height: "100%" }}
          size="small"
        >
          <Form layout="vertical" size="large">
            <Row gutter={[16, 2]}>
              <Col span={24}>
                <Form.Item label="Nome da Vaga" name="name">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Nome da Empresa" name="nomeEmpresa">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Cargo" name="cargo">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Formação exigida" name="formacao">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Descrição da Vaga" name="descricao">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Formação acadêmica" name="academic">
                  <TextArea rows={4} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Corpo do curriculo Lattes" name="resume">
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>

            <Divider>Endereço</Divider>

            <Row gutter={[16, 8]}>
              <Col span={8}>
                <Form.Item label="Digite seu CEP" name="cep">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={18}>
                <Form.Item label="Endereço" name="address">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={6}>
                <Form.Item label="Número" name="number">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Complemento" name="complement">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Cidade" name="city">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item label="Estado" name="state">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Button onClick={() => ""}>Cadastrar-se</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
