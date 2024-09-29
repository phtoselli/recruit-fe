import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  DatePicker,
  DatePickerProps,
  Divider,
  Flex,
  Form,
  Input,
  message,
  Row,
  Space,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { Link } from 'react-router-dom';
import { FilePenLine, User } from "lucide-react";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import TextArea from "antd/es/input/TextArea";
import Paragraph from "antd/es/typography/Paragraph";
import { applyToJob, getJobById } from "../../service/job";
import { getUsersByJob } from "../../service/job";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Job as JobType } from "../../utils/types/job";
import { List } from 'antd';
import { User as UserType } from "../../utils/types/user";
import "./css/DetalheVaga.css"; // Arquivo CSS para estilos

export default function Job() {
  const [form] = useForm();
  const params = useParams();
  const navigate = useNavigate();


  const user = JSON.parse(localStorage.getItem("user")!);

  const [jobInfo, setJobInfo] = useState<JobType | null>(null);
  const [userinfo, setUserInfo] = useState<UserType[]>([]); // Inicie com um array vazio


  const onSubmit = () => {
    const formValues = form.getFieldsValue();

    const userData = {
      name: formValues.name,
    };

      navigate(`/admin`);
    };
  
    useEffect(() => {
      const fetchJobData = async () => {
        try {
          const data = await getJobById(params.id ?? "0");
          setJobInfo(data);
        } catch (error) {
          console.error("Error fetching job info:", error);
        }
      };
  
      fetchJobData();
    }, [params.id]); // Adiciona params.id como dependência
  
    // Função para pegar informações dos usuários que aplicaram para a vaga
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const data = await getUsersByJob(params.id ?? "0");
          setUserInfo(data);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };
  
      fetchUserData();
    }, [params.id]); // Adiciona params.id como dependência
  


  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
      <nav className="breadcrumb">
      <Link to={`/admin/List`}>Listagem de Vagas</Link> &gt;
      <Link to={`/admin/DetalheVaga/${jobInfo?.id}`} className="active">Detalhe da Vaga</Link>
      </nav>
      <hr />
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
      <Flex >
        <div>
          <Title level={2}>Detalhes da vaga</Title>
          <Title level={4}>{jobInfo?.name}</Title>
        </div>      
      </Flex>
    </Col>
    <button className="edit-btn" aria-label="Editar Vaga">Editar Vaga</button>

      <Col span={24}>
        <Divider />
      </Col>

      <Col span={12} style={{ height: "100%" }}>
        <Card
          hoverable
          title="Descrição da vaga"
          style={{ padding: "24px", height: "100%" }}
          size="default"
        >
          <Row>
            <Col span={12}>
              {/* <Avatar size={50} src={`https://picsum.photos/200/300`} /> */}
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
              <Title level={4}>Cargo</Title>
              <Paragraph>{jobInfo?.position}</Paragraph>
            </Col>
            <Col span={24}>
              <Title level={4}>Formação necessária</Title>
              <Paragraph>{jobInfo?.education}</Paragraph>
            </Col>
            <Col span={24}>
              <Title level={4}>Descrição</Title>
              <Paragraph>
                {jobInfo?.jobDescription}
                Buscamos um profissional proativo para atuar em projetos
                desafiadores, com domínio em diversas tecnologias.
              </Paragraph>
            </Col>
          </Row>
        </Card>
      </Col>

      <Col span={12} style={{ height: "100%" }}>
        <Card
          title="Lista de candidatos"
          style={{ padding: "24px", height: "100%" }}
          size="small"
        >
          <List
          itemLayout="vertical"
          size="small"
          pagination={{ pageSize: 3 }}
          dataSource={userinfo || []} // Use um array vazio se userInfo for null
          renderItem={(item) => (
            <List.Item
              key={item.id} // Use item.id como a chave
              title={item.name} // Use item.name como título, que é uma string
              actions={[
                <Flex align="center" justify="center" gap={8} key="details"> {/* Adicione uma chave aqui também */}
                  <Link to={`/admin/CurriculoVaga/${item.id}/${jobInfo?.id}`}>
                    <FilePenLine size={16} />
                    Detalhes do Candidato
                  </Link>
                </Flex>,
              ]}
            >
              <List.Item.Meta
                title={<Title level={4}>{item.name}</Title>} // Se você quiser um título maior, use `title` aqui
                description={`Email: ${item.email} - Cidade: ${item.city}`} // Use as informações relevantes
              />
            </List.Item>
          )}
        />
        </Card>
      </Col>
    </Row>
    );
  }
  