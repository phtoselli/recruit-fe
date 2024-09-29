import { Button, Card, Flex, Form, Image, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import Text from "antd/es/typography/Text";

import logo from "../../assets/logo-black.svg";
import { userLogin } from "../../service/user";

export default function Login() {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFinish = async () => {
    const formValues = form.getFieldsValue();

    if (formValues.email && formValues.password) {
      userLogin(formValues)
        .then((dataUser: any) => {
          if (dataUser) {
            localStorage.setItem("user", JSON.stringify(dataUser));
            navigate(`/${dataUser.role}`);
          }
        })
        .catch((_) => {
          message.warning("Informe corretamente o email e senha.", 4);
        });
    } else {
      message.warning("Informe corretamente o email e senha.", 4);
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      vertical
      style={{ width: "100vw", height: "100vh", backgroundColor: "#fdfdfd" }}
    >
      <Card>
        <Flex align="center" justify="center" style={{ padding: "32px 0px" }}>
          <Image preview={false} src={logo} width={150} />
        </Flex>
        <Flex vertical gap={8}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item label="Digite seu E-mail:" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Digite sua senha:" name="password">
              <Input.Password />
            </Form.Item>
          </Form>
          <Button type="primary" onClick={() => form.submit()}>
            Entrar
          </Button>
          <Text type="secondary">
            Não possui uma conta? <Link to="/register">Cadastre-se</Link>
          </Text>
        </Flex>
      </Card>
    </Flex>
  );
}
