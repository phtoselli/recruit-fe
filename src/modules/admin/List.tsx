import { Link } from "react-router-dom";

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

import { FilePenLine } from "lucide-react";
import { Card, Col, Divider, Flex, List, Row } from "antd";
import { Job } from "../../utils/types/job";
import { useEffect, useState } from "react";
import { getJobs } from "../../service/job";
import "./css/CurriculoVaga.css";



export default function ListLayout() {
  const [jobsList, setJobsList] = useState<Job[] | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        if (Array.isArray(data)) {
          setJobsList(data);
        } else {
          console.error('Data is not an array:', data);
          setJobsList([]);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobsList([]);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Row>
      <Col span={24}>
      <nav className="breadcrumb">
      <Link to={`/admin/List`}  className="active">Listagem de Vagas</Link>
      </nav>
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Flex>
          <Title level={2}>Vagas disponíveis</Title>
          <Paragraph></Paragraph>
        </Flex>
      </Col>
      <Col span={24}>
        <Divider />
      </Col>
      <Col span={24}>
        <Card>
          <List
            itemLayout="vertical"
            size="small"
            pagination={{
              pageSize: 3,
            }}
            dataSource={jobsList?.map((job: Job) => ({
              index: job.id,
              title: job.name,
              description: `Data de abertura: ${job.createDate}`,
              content: job.jobDescription,
            }))}
            renderItem={(item: any) => (
              <List.Item
                key={item?.title}
                actions={[
                  <Flex align="center" justify="center" gap={8}>
                    <Link to={`/admin/DetalheVaga/${item?.index}`}>
                      <FilePenLine size={16} />
                      Detalhes da Vaga
                    </Link>
                  </Flex>,
                ]}
              >
                <List.Item.Meta
                  title={<Title level={4}>{item?.title}</Title>}
                  description={item?.description}
                />
                {item?.content}
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
}
