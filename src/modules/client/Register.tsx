import { Button, Card, Flex, Form, Image, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from "react-router-dom";
import Text from "antd/es/typography/Text";

import logo from '../../assets/logo-black.svg';

export default function Register() {
  const [form] = useForm();

  const onFinish = () => {
    // const formValues = form.getFieldsValue();

    // if (formValues.name && formValues.email && formValues.password) {
    //   registerUser({
    //     name: formValues.name,
    //     email: formValues.email,
    //     password: formValues.password,
    //   })
    //     .then((data: any) => {
    //       if (data) {
    //         return redirect('/login');
    //       }
    //     });
    // } else {
    //   message.warning('Informe corretamente o email e senha.', 4);
    // }
  }

  return (
    <Flex align="center" justify="center" vertical style={{width: '100vw', height: '100vh', backgroundColor: '#fdfdfd'}}>
      <Card>
        <Flex align="center" justify="center" style={{padding: '32px 0px'}}>
          <Image preview={false} src={logo} width={150} />
        </Flex>
        <Flex vertical gap={8}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item label="Digite seu Nome" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Digite seu E-mail:" name="email">
              <Input />
            </Form.Item>

            <Form.Item label="Crie sua senha:" name="password">
              <Input.Password />
            </Form.Item>
          </Form>
          <Button type="primary" onClick={() => form.submit()}>Criar conta</Button>
          <Text>Já possui uma conta? <Link to="/login">Fazer login</Link></Text>
        </Flex>
      </Card>
    </Flex>
  )
}