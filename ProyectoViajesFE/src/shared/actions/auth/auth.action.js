import { viajesApi } from "../../../config/api/viajesApi";

export const loginAsync = async (form) => {
    try {
        const { data } = await viajesApi.post('/auth/login', form);
        
        return data;
    } catch (error) {
        console.error({...error});
        return error?.response?.data;        
    }
}