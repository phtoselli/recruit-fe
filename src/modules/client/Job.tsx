import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  message,
  Row,
  Space,
} from "antd";
import { useForm } from "antd/es/form/Form";

import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import { applyToJob, getJobById } from "../../service/job";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Job as JobType } from "../../utils/types/job";

export default function Job() {
  const [form] = useForm();
  const params = useParams();

  const user = JSON.parse(localStorage.getItem("user")!);

  const [jobInfo, setJobInfo] = useState<JobType | null>(null);

  const onSubmit = () => {
    const formValues = form.getFieldsValue();

    const userData = {
      name: formValues.name,
    };

    if (formValues && params.id) {
      applyToJob(params.id, user.id, userData);
    }
  };

  // Implementar chamada para pegar informações da Vaga
  useEffect(() => {
    getJobById(params?.id ?? "0").then((data: any) => setJobInfo(data));
  }, []);

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Flex vertical gap={8}>
          <Title level={2}>Inscreva-se</Title>
          <Paragraph>{jobInfo?.name}</Paragraph>
        </Flex>
      </Col>

      <Col span={24}>
        <Divider />
      </Col>

      <Col span={12} style={{ height: "100%" }}>
        <Card
          title="Descrição da vaga"
          style={{ padding: "24px", height: "100%" }}
          size="small"
        >
          <Row>
            <Col span={12}>
              <Avatar size={50} src={`https://picsum.photos/200/300`} />
              <Title level={3}>{jobInfo?.company?.name}</Title>
              <Paragraph>{jobInfo?.company?.description}</Paragraph>
            </Col>
            <Col span={12}>
              <Flex vertical gap={16}>
                <Space>
                  <Text>{jobInfo?.createDate?.toString() ?? "-"}</Text>
                </Space>
                <Space>
                  <Text>{jobInfo?.expireDate?.toString() ?? "-"}</Text>
                </Space>
              </Flex>
            </Col>

            <Col span={24}>
              <Title level={4}>Descrição da vaga</Title>
              <Paragraph>{jobInfo?.position}</Paragraph>
            </Col>
            <Col span={24}>
              <Title level={4}>Formação necessária</Title>
              <Paragraph>{jobInfo?.education}</Paragraph>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={12} style={{ height: "100%" }}>
        <Card
          title="Preencha seus dados"
          style={{ padding: "24px", height: "100%" }}
          size="small"
        >
          <Form form={form} layout="vertical" onFinish={onSubmit} size="large">
            <Row gutter={[16, 2]}>
              <Col span={12}>
                <Form.Item label="Nome" name="name">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Telefone" name="phone">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Data de nascimento" name="birth">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Rede social" name="social">
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
                <Button onClick={() => form.submit()}>Cadastrar-se</Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
