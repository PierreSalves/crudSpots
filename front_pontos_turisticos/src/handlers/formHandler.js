import { requestHandler } from './requestHandler.js';

export const formHandler = async (method, action, idform) => {
    try {
        const formData = new FormData(document.getElementById(idform));
        const body = {};
        for (const pair of formData.entries()) {
            body[pair[0]] = pair[1];
        }

        const data = await requestHandler(method, action, body);
        return data;

    } catch (error) {
        return error;
    }
}
