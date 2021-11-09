// import axios from 'axios';
import authHeader from './Auth-header';
import http from "../http-common";


class UserService {
  getPublicContent() {
    return http.get('auth/all');
  }

  getUserBoard() {
    return http.get('auth/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return http.get('auth/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return http.get('auth/admin', { headers: authHeader() });
  }
}

export default new UserService();