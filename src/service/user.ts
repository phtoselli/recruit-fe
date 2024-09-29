import axios from "axios";
import { message } from "antd";
import { Filter, Login, User } from "../utils/types/user";

const API_URL = "https://fiap-backend-recruta-production.up.railway.app";

// Função para localizar todos os usuários
export const getAllUsers = () => {
  message.loading("Buscando usuários...", 0);
  axios
    .get(`${API_URL}/user`)
    .then((result) => {
      message.destroy();
      message.success("Usuários encontrados com sucesso!", 4);
      return result.data;
    })
    .catch((error) => {
      message.destroy();
      message.error(error.message || "Erro ao buscar usuários.", 4);
    });
};

// Função para localizar um usuário por ID
export const getUserById = async (id: string) => {
  message.loading("Buscando usuário...", 0);
  try {
    const result = await axios.get(`${API_URL}/user/${id}`);
    message.destroy();
    message.success("Usuário encontrado com sucesso!", 4);
    return result.data; // Retorna os dados do usuário
  } catch (error: any) {
    message.destroy();
    message.error(error.message || "Erro ao buscar usuário.", 4);
    return undefined; // Retorna undefined ou um valor padrão se houver erro
  }
};

// Função para registrar um novo usuário
export const registerUser = (userData: User) => {
  message.loading("Registrando usuário...", 0);
  return axios
    .post(`${API_URL}/user/register`, userData)
    .then((result) => {
      message.destroy();
      message.success("Usuário registrado com sucesso!", 4);
      return result.data;
    })
    .catch((error) => {
      message.destroy();
      message.error(error.message || "Erro ao registrar usuário.", 4);
    });
};

// Função para login de usuário
export const userLogin = (loginData: Login) => {
  message.loading("Efetuando login...", 0);
  return axios
    .post(`${API_URL}/user/login`, loginData)
    .then((result) => {
      message.destroy();
      message.success("Login efetuado com sucesso!", 4);
      return result.data;
    })
    .catch((error) => {
      message.destroy();
      return message.error(error.message || "Erro ao efetuar login.", 4);
    });
};

// Função para atualizar um usuário
export const updateUser = (id: string, userData: User) => {
  message.loading("Atualizando usuário...", 0);
  axios
    .put(`${API_URL}/user/${id}`, userData)
    .then((result) => {
      message.destroy();
      message.success("Usuário atualizado com sucesso!", 4);
      return result.data;
    })
    .catch((error) => {
      message.destroy();
      message.error(error.message || "Erro ao atualizar usuário.", 4);
    });
};

// Função para deletar um usuário
export const deleteUser = (id: string) => {
  message.loading("Deletando usuário...", 0);
  axios
    .delete(`${API_URL}/user/${id}`)
    .then(() => {
      message.destroy();
      message.success("Usuário deletado com sucesso!", 4);
    })
    .catch((error) => {
      message.destroy();
      message.error(error.message || "Erro ao deletar usuário.", 4);
    });
};

// Função para filtrar usuários
export const filterUsers = (filterData: Filter) => {
  message.loading("Filtrando usuários...", 0);
  axios
    .post(`${API_URL}/user/filter`, filterData)
    .then((result) => {
      message.destroy();
      message.success("Usuários filtrados com sucesso!", 4);
      return result.data;
    })
    .catch((error) => {
      message.destroy();
      message.error(error.message || "Erro ao filtrar usuários.", 4);
    });
};
