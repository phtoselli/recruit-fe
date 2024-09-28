import { Button, Card, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { createJob } from "../../service/job";

export default function Register() {
  const [form] = useForm();

  const handleSubmit = () => {
    const formValues = form.getFieldsValue();

    try {
      const response = createJob({
        ...formValues,
        company: { name: formValues.company },
      });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24} style={{ height: "100%" }}>
        <Card
          title="Cadastrar Vaga"
          style={{ padding: "24px", height: "100%" }}
          size="small"
        >
          <Form
            form={form}
            layout="vertical"
            size="large"
            onFinish={handleSubmit}
          >
            <Row gutter={[16, 2]}>
              <Col span={24}>
                <Form.Item label="Nome da Vaga" name="name">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Nome da Empresa" name="company">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Cargo" name="position">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Formação exigida" name="education">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Descrição da Vaga" name="description">
                  <TextArea rows={4} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Button onClick={() => form.submit()}>Salvar</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
