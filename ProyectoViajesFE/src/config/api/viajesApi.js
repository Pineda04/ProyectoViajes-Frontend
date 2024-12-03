import axios from "axios";
import { useAuthStore } from "../../features/security/store/useAuthStore";

const API_URL = "https://localhost:7084/api";
axios.defaults.baseURL = API_URL;
const setAuthToken = () => {
  const auth = getAuth();
  if (auth) {
    viajesApi.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
  } else {
    delete viajesApi.defaults.headers.common["Authorization"];
  }
};

const getAuth = () => {
  const lsToken = localStorage.getItem("token");
  const lsRefreshToken = localStorage.getItem("refreshToken");
  if (lsToken && lsRefreshToken) {
    return { token: lsToken, refreshToken: lsRefreshToken };
  }
  return null;
};
setAuthToken();
let refreshingTokenPromise = null;

const viajesApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

viajesApi.interceptors.response.use(
  (config) => config,
  (error) => {
    const auth = getAuth();
    if (
      error.response &&
      error.response.status === 401 &&
      auth &&
      !refreshingTokenPromise
    ) {
      refreshingTokenPromise = viajesApi
        .post(
          "auth/refresh-token",
          {
            token: auth.token,
            refreshToken: auth.refreshToken,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          const setSession = useAuthStore.getState().setSession;
          const user = {
            email: response.data.data.email,
            fullName: response.data.data.fullName,
            tokenExpiration: response.data.data.tokenExpiration,
          };
          // TODO: Sigue
        });
    }
  }
);

viajesApi.interceptors.request.use(
  (config) => {
    const token = useAuthStore().getState().token;
    if (token) {
      config.headers["Authentication"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { viajesApi, API_URL };
