const fetchStates = async () => {
    try {
        const response = await fetch('http://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const data = await response.json().then(res => {
            return res.sort((a, b) => a.nome > b.nome ? 1 : -1);
        });
        return data;
    } catch (err) {
        return [];
    }
};

const fetchCities = async (state) => {
    try {
        const response = await fetch(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
        const data = await response.json().then(res => {
            return res.sort((a, b) => a.nome > b.nome ? 1 : -1);
        });
        return data;
    } catch (err) {
        return [];
    }
};
export { fetchStates, fetchCities };

