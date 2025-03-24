import axios from 'axios';
export const requestHandler = async (method, url, body = null) => {
    try {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
            method: method.toLowerCase(),
            url: url,
            params: method.toLowerCase() === 'get' ? body : null,
            data: method.toLowerCase() !== 'get' ? body : null,
        };

        const response = await axios(options);

        return response.data;
    } catch (error) {
        // console.error('Erro no requestHandler:', error);
        return error;
    }
};
