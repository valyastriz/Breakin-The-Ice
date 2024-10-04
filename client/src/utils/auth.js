import { jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();  // Fetch the token from localStorage
    return token ? jwtDecode(token) : null;  // Decode and return the user profile
  }

  getToken() {
    const token = localStorage.getItem('token');
    console.log('Retrieved token:', token); // Add this log for debugging
    return token;
}

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
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

// Assign the instance to a variable before exporting
const authServiceInstance = new AuthService();

export default authServiceInstance;