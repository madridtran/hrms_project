import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/v1/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'employees');
  }

  getEmployee() {
    return axios.get(API_URL + 'employee', { headers: authHeader() });
  }
  deleteUser(id) {
    return axios.delete(API_URL + `employees/${id}`, { headers: authHeader() });
  }
  addEmployee(employee) {
    return axios.post(API_URL + 'employees',employee, { headers: authHeader() });
  }
  getDepartment() {
    return axios.get(API_URL + 'department', { headers: authHeader() });
  }
  addDepartment(department) {
    return axios.post(API_URL + 'department',department, { headers: authHeader() });
  }
  // getModeratorBoard() {
  //   return axios.get(API_URL + 'employees/3', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'employees/3', { headers: authHeader() });
  // }
}

export default new UserService();