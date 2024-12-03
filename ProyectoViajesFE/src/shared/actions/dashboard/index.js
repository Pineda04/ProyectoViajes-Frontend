import { viajesApi } from "../../../config/api/viajesApi";

export const dashboardAsync = async () => {
    try {
        const { data } = await viajesApi.get("/dashboard/info");
        return data;
    } catch (error) {
        console.error(error);
        return error?.response.data;
    }
}