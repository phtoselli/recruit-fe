import { Button, Flex, Result } from "antd";

export default function ErrorPage() {

  return (
    <Flex align="center" justify="center" style={{width: '100vw', height: '100vh'}}>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você está tentando acessar não existe."
        extra={<Button type="primary">Voltar para página principal</Button>}
      />
    </Flex>
  )
}