export const requestHandler = async (route) => {
    try {
        const response = await axios.get(route);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
