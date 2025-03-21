import axios from "axios";

const api = axios.create({
    baseURL: "http://servicodados.ibge.gov.br/api/v1/localidades/estados", 
});

export default api;
