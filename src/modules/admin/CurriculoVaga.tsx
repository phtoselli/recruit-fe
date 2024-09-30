import "./css/CurriculoVaga.css";
import { FiMail, FiPhone, FiMoreHorizontal } from "react-icons/fi";
import fotomulher from '../../assets/CurriculoFoto.svg';
import fotomapa from '../../assets/User_Locations.svg';
import { getUserById } from "../../service/user";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { User as UserType } from "../../utils/types/user";
import { useParams } from "react-router-dom";

const CurriculoVaga = () => {
  const [userInfo, setUserInfo] = useState<UserType | null>(null);
  const { id, idJob } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserById(id ?? "0");
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div className="profile-container">
      <nav className="breadcrumb">
      <Link to={`/admin/List`}>Listagem de Vagas</Link> &gt;
      <Link to={`/admin/DetalheVaga/${idJob}`}>Detalhe da Vaga</Link> &gt;
      <Link to={`/admin/CurriculoVaga/${userInfo?.id}`} className="active"> Detalhe do Candidato </Link>
      </nav>
      <hr />
      <div className="Sessaobtn">
        <div className="header">
          <h1>{userInfo?.name || "Carregando..."}</h1> {/* Exibe o nome do usuário */}
          <div className="score">
            <span>93%</span>
          </div>
        </div>
        <div className="buttons">
        <Link to={`/admin/DetalheVaga/${idJob}`}> <button>Iniciar Avaliação</button></Link>
          <button>Agendar Entrevista</button>
          <button>Iniciar Avaliação</button>
        </div>
      </div>

      <div className="main-content">
        <div className="left-section">
          <div className="profile-image">
            <img src={userInfo?.picture || fotomulher} alt={userInfo?.name || "Usuário"} /> {/* Exibe a foto do usuário */}
          </div>
          <div className="contact-icons">
            <FiMail size={25} color="White" />
            <FiPhone size={25} color="White" />
            <FiMoreHorizontal size={25} color="White" />
          </div>
        </div>

        <div className="right-section">
          <img src={fotomapa} alt="Mapa do Brasil" className="map-image" />
        </div>
      </div>

      <div className="container">
        <div className="details">
          <h2>Detalhes:</h2>
          <p><strong>Endereço:</strong> Rua dos Tupinambás, 572 - Bairro Umarizal <br /> - Belém, PA, CEP: 66050-540</p>
          <p><strong>Email:</strong> {userInfo?.email || "Carregando..."}</p>
          <p><strong>Celular:</strong> {userInfo?.phone || "Carregando..."}</p>
        </div>
        <div className="social">
          <h2>Redes Sociais:</h2>
          <ul>
            <li><a href={userInfo?.socialLink} target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="sectionCurriculum">
          <h1>Currículo Lattes</h1>
          <hr />
          <p className="curriculum">
                Doutora em Ciências da Educação pela (Universidad Internacional Tres Fronteras-Uninter 2019).
                Mestre em Enfermagem pela Universidade Federal da Paraíba. Especialista em Pneumologia Sanitária pelo Instituto
                 Hélio Fraga RJ (2007), Especialista em Enfermagem em Ginecologia e Obstetrícia pela Unyleya (2021). Especialista
                 em SAÚDE PÚBLICA COM ÊNFASE EM ESF - ESTRATÉGIA SAÚDE DA FAMÍLIA- FAVENI 2023. Área de Conhecimento: Saúde e Bem Estar.
                 Possui Graduação em Enfermagem pela Universidade Federal da Paraíba (1994). Foi Professora Substituta da UFPB no curso
                 de Graduação de Enfermagem e Engenharia Ambiental (2011-2012), foi Docente da Faculdade Santa Emília de Rodat (2013).
                 Trabalhou como Professora Supervisora na Faculdade Nova Esperança e exerceu a função de Enfermaria na Atenção Básica,
                 foi responsável pelo SINAN na Vigilância Epidemiológica pela Prefeitura Municipal de Cabedelo. Exerceu o cargo de Gerente de Educação em Saúde na Prefeitura Municipal de João Pessoa (2013). Facilitadora para treinamento de Educação Permanente para Equipes de Saúde da Família - ESF. Exerceu o cargo de Diretora no ambulatório especializado em IST/HIV/Aids - SAE, foi Diretora da Vigilância Epidemiológica no município de Cabedelo e PB. Atuou como Docente da Faculdade de Enfermagem São Vicente de Paula - FESVIP João Pessoa/PB no período de março de 2015 a dezembro de 2018. Professora no Curso Técnico em Enfermagem-EID(2019-2020). Atualmente, Docente do curso de graduação de Enfermagem no Centro Universitário Estácio de Sá do Recife, Docente do curso de graduação de Enfermagem Uninassau Olinda/PE e Professora substituta do Curso Técnico de Enfermagem IFPE- campos Abreu e Lima/PE.
            </p>
        </div>
      </div>
      <div className="container">
        <div className="sectionFormacao">
          <h1>Formação Acadêmica</h1>
          <hr />
          <div className="academic-entry">
            <h3>{userInfo?.education || "Carregando..."}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculoVaga;
