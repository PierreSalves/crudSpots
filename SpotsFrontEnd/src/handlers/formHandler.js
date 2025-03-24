import { requestHandler } from './requestHandler.js';


export const formHandler = async (method, action, idform) => {
    try {
        function formToJSON(body) {
            const json = {};

            Object.entries(body).forEach(([key, value]) => {
                const keys = key.split(".");
                let current = json;

                for (let i = 0; i < keys.length; i++) {
                    const k = keys[i];

                    if (i === keys.length - 1) {
                        current[k] = isNaN(value) ? value : parseInt(value, 10);
                    } else {
                        current[k] = current[k] || {};
                        current = current[k];
                    }
                }
            });

            return json;
        }

        const formData = new FormData(document.getElementById(idform));
        const body = {};
        for (const pair of formData.entries()) {
            body[pair[0]] = pair[1];
        }
        const structuredBody = formToJSON(body);
        const data = await requestHandler(method, action, structuredBody);
        return data;

    } catch (error) {
        return error;
    }
}
