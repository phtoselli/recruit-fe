import axios from "axios";
import { message } from "antd";
import { Company, Filter } from "../utils/types/company";

// const API_URL = 'https://fiap-backend-recruta-production.up.railway.app';
const API_URL = "http://localhost:8081";

// Criar empresa
export const createCompany = (companyData: Company) => {
  message.loading("Criando empresa...", 0);
  axios
    .post(`${API_URL}/company/register`, companyData)
    .then(() => {
      message.destroy();
      message.success("Empresa criada com sucesso", 4);
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao criar empresa.", 4);
    });
};

// Listar empresas
export const getAllCompanies = () => {
  message.loading("Buscando empresas...", 0);
  axios
    .get(`${API_URL}/company`)
    .then((result) => {
      message.destroy();
      message.success("Empresas encontradas com sucesso", 4);
      return result.data;
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao buscar empresas.", 4);
    });
};

// Listar empresa por ID
export const getCompanyById = (id: string) => {
  message.loading("Buscando empresa...", 0);
  axios
    .get(`${API_URL}/company/${id}`)
    .then((result) => {
      message.destroy();
      message.success("Empresa encontrada com sucesso", 4);
      return result.data;
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao buscar empresa.", 4);
    });
};

// Função para atualizar uma empresa
export const updateCompany = (id: string, companyData: Company) => {
  message.loading("Atualizando empresa...", 0);
  axios
    .put(`${API_URL}/company/${id}`, companyData)
    .then((result) => {
      message.destroy();
      message.success("Empresa atualizada com sucesso!", 4);
      return result.data;
    })
    .catch((error: any) => {
      message.destroy();
      message.error(error.message || "Erro ao atualizar empresa.", 4);
    });
};

// Função para deletar uma empresa
export const deleteCompany = (id: string) => {
  message.loading("Deletando empresa...", 0);
  axios
    .delete(`${API_URL}/company/${id}`)
    .then(() => {
      message.destroy();
      message.success("Empresa deletada com sucesso!", 4);
    })
    .catch((error) => {
      message.destroy();
      message.error(error.message || "Erro ao deletar empresa.", 4);
    });
};

// Função para filtrar empresas
export const filterCompanies = (filterData: Filter) => {
  message.loading("Filtrando empresas...", 0);
  axios
    .post(`${API_URL}/company/filter`, filterData)
    .then((result) => {
      message.destroy();
      message.success("Empresas filtradas com sucesso!", 4);
      return result.data;
    })
    .catch((error) => {
      message.destroy();
      message.error(error.message || "Erro ao filtrar empresas.", 4);
    });
};
