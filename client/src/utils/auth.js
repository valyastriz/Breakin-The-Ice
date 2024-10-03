import { jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(idToken) {
    localStorage.setItem('token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}

export default new AuthService();