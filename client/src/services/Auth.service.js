import axios from "axios";
import http from "../http-common";

const API_URL = "http://localhost:5000/api/auth/";


class AuthService {

  

  login(data) {
    return http
      .post("/auth/login", {data})
      .then(response => {
          console.log('inside authService accessToken',response.data.access_token)
        if (response.data.access_token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log('localstorege set done')
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    // history.push('/login')
  }

  register(data) {
    return http.post("/auth/signup", data);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();