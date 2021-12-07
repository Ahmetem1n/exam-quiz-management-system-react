import axios from "axios";
import { Component } from "react";
export default class AdminService extends Component {
  getAdmins() {
    return axios.get("http://localhost:8080/admin/getAll");
  }
  getByAdminId(adminId) {
    return axios.get(
      "http://localhost:8080/admin/getByAdminId?adminId=" + adminId
    );
  }
  addAdmin(initialValues) {
    return axios.post("http://localhost:8080/admin/add?userId=" + initialValues.userId);
  }
  deleteAdmin(adminId) {
    return axios.post("http://localhost:8080/admin/delete?adminId=" + adminId);
  }
  updateAdmin(initialValues) {
    return axios.post(
      "http://localhost:8080/admin/update?adminId=" +
        initialValues.adminId +
        "&userId=" +
        initialValues.userId
    );
  }
}
