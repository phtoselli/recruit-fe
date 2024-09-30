import { Button, Card, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { createJob } from "../../service/job";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form] = useForm();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formValues = form.getFieldsValue();
    console.log(formValues);
    try {
      const response = createJob({
        ...formValues,
        company: { name: formValues.company },
        createDate: new Date().toLocaleDateString("pt-BR"),
      });
      navigate(`/admin/list`);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24} style={{ height: "100%" }}>
        <h1>Cadastrar Vaga</h1>
        <Card style={{ padding: "24px", height: "100%" }} size="small">
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
                <Form.Item label="Descrição da Vaga" name="jobDescription">
                  <TextArea rows={4} />
                </Form.Item>
              </Col>

              <Col span={24} style={{ display: "flex", justifyContent: "end" }}>
                <Button type="primary" onClick={() => form.submit()}>
                  Salvar
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
