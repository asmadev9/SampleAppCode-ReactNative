import { API } from "../constants";
import axios from 'axios'

const APIService = axios.create({
  baseURL: API.BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const AuthService = {
  async login(pic, uuid, password) {
    const rs = await APIService.post("/login", {
      pic,
      uuid,
      password,
    });
    return {
      access_token: rs?.data?.access_token,
      oneplatform_access_token: rs?.data?.openplatform_token,
    };
  },
  async signUp(data) {
    return APIService.post("/register", data);
  },
  async me() {
    const rs = await APIService.get("/me");
    return rs.data;
  },
};

export default AuthService;
