
import "./css/CurriculoVaga.css"; // Arquivo CSS para estilos
import { FiMail, FiPhone, FiMoreHorizontal } from "react-icons/fi"; // Ícones
import fotomulher from '../../assets/CurriculoFoto.svg';
import fotomapa from '../../assets/User_Locations.svg';

const CandidateProfile = () => {
  return (
    <div className="profile-container">
      <nav className="breadcrumb">
        <a href="/">Listagem de Vagas</a> &gt;
        <a href="/">Detalhe da Vaga</a> &gt;
        <a className="active" href="/">Detalhe do Candidato</a>
      </nav>
      <hr/>
      <div className="Sessaobtn">
      <div className="header">
        <h1>Marcela Rodrigues</h1>
        <div className="score">
          <span>93%</span>
        </div>
      </div>
      <div className="buttons">
        <button>Detalhe da Vaga</button>
        <button>Agendar Entrevista</button>
        <button>Iniciar Avaliação</button>
      </div>
        </div>
     
      <div className="main-content">
        <div className="left-section">
          <div className="profile-image">
            <img src={fotomulher} alt="Marcela Rodrigues" />
          </div>
          <div className="contact-icons">
            <FiMail size={25} color="White" />
            <FiPhone size={25} color="White" />
            <FiMoreHorizontal size={25} color="White"/>
          </div>
        </div>

        <div className="right-section">
          <img src={fotomapa} alt="Mapa do Brasil" className="map-image" />
        </div>
      </div>

      <div className="container">
        <div className="details">
            <h2>Detalhes:</h2>
            <p><strong>Endereço:</strong>   Rua dos Tupinambás, 572 - Bairro Umarizal <br/> - Belém, PA, CEP: 66050-540</p>
            <p><strong>Email:</strong> marcelarod@gmail.com</p>
            <p><strong>Celular:</strong> (99) 6756-5644</p>
        </div>
        <div className="social">
            <h2>Redes Sociais:</h2>
            <ul>
                <li><a href="#" target="_blank">Linkedin</a></li>
                <li><a href="#" target="_blank" className="instagram">Instagram</a></li>
                <li><a href="#" target="_blank" className="facebook">Facebook</a></li>
                <li><a href="#" target="_blank" className="tumblr">Tumblr</a></li>
                <li><a href="#" target="_blank" className="tumblr">Tumblr</a></li>
            </ul>
        </div>
    </div>
    <div className="container">
        <div className="sectionCurriculum">
            <h1>Currículo Lattes</h1>
            <hr/>
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
            <hr/>
            <div className="academic-entry">
                <h3>2015 - 2019</h3>
                <p><strong>Doutorado em CIÊNCIAS DA EDUCAÇÃO.</strong><br/>
                Universidad Internacional Tres Fronteras, UNINTER, Paraguai.<br/>
                Título: PROGRAMA SAÚDE E PREVENÇÃO EM ESCOLAS DO MUNICÍPIO DE CABEDELO/PB SOB A ÓTICA DE DOCENTES E GESTORES,<br/> Ano de obtenção: 2019.<br/>
                Orientador: Dr. Defli López Roión.</p>
            </div>

            <div className="academic-entry">
                <h3>2008 - 2010</h3>
                <p><strong>Mestrado em Enfermagem.</strong><br/>
                Universidade Federal da Paraíba, PB, Brasil.<br/>
                Título: Tuberculose no Olhar de Docentes e Familiares: representação social, Ano de Obtenção: 2010.<br/>
                Orientador: Antonila de Silva Oliveira.<br/>
                Coordenador: Leniude Duarte de Sá.</p>
            </div>

            <div className="academic-entry">
                <h3>2022 - 2023</h3>
                <p><strong>Especialização em SAÚDE PÚBLICA COM ÊNFASE EM ESF - ESTRATÉGIA SAÚDE DA FAMÍLIA.</strong> (Carga Horária: 750h).<br/>
                FACULDADE VENDA NOVA DO IMIGRANTE, IESX, PROV, Brasil.<br/>
                Título: ATUAÇÃO DA ENFERMEIRA ASSOCIADA À PREVENÇÃO DO CÂNCER DE COLO UTERINO EM MULHERES ADULTAS: REVISÃO INTEGRATIVA.<br/>
                Orientador: DSc. ANA PAULA RODRIGUES.</p>
             </div>

            <div className="academic-entry">
                <h3>2021 - 2022</h3>
                <p><strong>Especialização em Curso de Pós-Graduação Lato Sensu, Especialização.</strong> (Carga Horária: 360h).<br/>
                Faculdade Unyleya, UNYLEYA, Brasil.<br/>
                Título: Ginecologia e Obstetrícia.</p>
            </div>

            <div className="academic-entry">
                <h3>2006-2007</h3>
                <p><strong>Especialização em Pneumologia Sanitária.</strong> (Carga Horária: 500h).<br/>
                Centro de Referência Professor Hélio Fraga/Escola Nacional de Saúde Pública, CRPHF/ENSP, Brasil.<br/>
                Título: Implantação de busca ativa dos sintomáticos respiratórios, capacitando 100% dos <br/> agentes comunitários de saúde nas ações do programa de controle da tuberculose, visando aumento
                 em 10% <br/>a descoberta de casos no município de Ribeirão das Neves no ano de 2007.<br/>
                Bolsista do(a): Fundação para o Desenvolvimento Científico e Tecnológico em Saúde, FIOCRUZ, Brasil.</p>
            </div>
         </div>
      </div>
    </div>
  );
};
export default CandidateProfile;
