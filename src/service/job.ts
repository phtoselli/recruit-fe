import axios from 'axios';
import { Filter, Job } from '../utils/types/job';
import { message } from 'antd';

const API_URL = 'https://fiap-backend-recruta-production.up.railway.app';

// Função para criar uma vaga
export const createJob = (jobData: Job) => {
    message.loading('Criando vaga...', 0);
    axios.post(`${API_URL}/job/register`, jobData)
      .then(() => {
        message.destroy();
        message.success('Vaga criada com sucesso!', 4);
      })
      .catch((error: any) => {
        message.destroy();
        message.error(error.message || "Erro ao criar vaga.", 4);
      })
};

// Função para localizar todos as vagas
export const getJobs = async () => {
  message.loading('Buscando vagas...', 0);
  axios.get(`${API_URL}/job`)
    .then((response) => {
      message.destroy();
      message.success('Vagas encontradas com sucesso!', 4);
      return response.data;
    })
    .catch((error: any) => {
      message.destroy();
      return message.error(error.message || "Erro ao buscar por vagas.", 4);
    })
};

// Função para localizar uma vaga por ID
export const getJobById = (id: string) => {
  message.loading('Buscando vaga...', 0);
  axios.get(`${API_URL}/job/${id}`)
    .then((response) => {
      message.destroy();
      message.success('Vaga encontrada com sucesso!', 4);
      return response.data;
    })
    .catch((error: any) => {
      message.destroy();
      return message.error(error.message || 'Erro ao buscar vaga', 4);
    })
};

// Função para alterar uma vaga
export const updateJob = (id: string, jobData: Job) => {
  message.loading('Alterando vaga...', 0)
  axios.put(`${API_URL}/job/${id}`, jobData)
    .then(() => {
      message.destroy();
      message.success('Vaga alterada com sucesso!', 4);
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao alterar vaga.", 4)
    })
};

// Função para deletar uma vaga
export const deleteJob = (id: string) => {
  message.loading('Deletando vaga...', 0);
  axios.delete(`${API_URL}/job/${id}`)
    .then(() => {
      message.destroy();
      message.success('Vaga deletada com sucesso!', 4);
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao deletar vaga.", 4)
    })
};

// Função para aplicar a uma vaga
export const applyToJob = (jobId: string, userId: string, userData: any) => {
  message.loading('Aplicando para vaga...', 0);
  axios.post(`${API_URL}/job/${jobId}/apply`, { id: userId, userData })
    .then(() => {
      message.destroy();
      message.success('Vaga aplicada!', 4);
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao se aplicar para vaga.", 4)
    })
};

// Função para filtrar vagas por data
export const filterJobs = (filterData: Filter) => {
  message.loading('Filtrando vagas...', 0);
  axios.post(`${API_URL}/job/filter`, filterData)
    .then((response) => {
      message.destroy();
      message.success('Vagas filtradas com sucesso!', 4);
      return response.data;
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || 'Erro ao filtrar vagas', 4)
    });
};

// Função para achar usuários por vaga
export const getUsersByJob = (jobId: string) => {
  message.loading('Buscando usuários por vaga...', 0);
  axios.get(`${API_URL}/job/${jobId}/users`)
    .then((response) => {
      message.destroy();
      message.success('Usuários encontrados com sucesso!', 4);
      return response.data;
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao buscar por usuários na vaga.", 4)
    })
};