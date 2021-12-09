import axios from "axios";
import { Component } from "react";
export default class UserService extends Component {
  getUsers() {
    return axios.get("http://localhost:8080/user/getAll");
  }
  getByUserId(userId) {
    return axios.get("http://localhost:8080/user/getByUserId?userId=" + userId);
  }
  addUser(initialValues) {
    return axios.post(
      "http://localhost:8080/user/add?roleId=" +
        initialValues.roleId +
        "&userFirstname=" +
        initialValues.userFirstname +
        "&userLastname=" +
        initialValues.userLastname +
        "&userEmail=" +
        initialValues.userEmail +
        "&nationalityId=" +
        initialValues.nationalityId +
        "&userGender=" +
        initialValues.userGender +
        "&userPhoto=" +
        initialValues.userPhoto +
        "&userPassword=" +
        initialValues.userPassword
    );
  }
  deleteUser(userId) {
    return axios.post("http://localhost:8080/user/delete?userId=" + userId);
  }
  updateUser(initialValues) {
    return axios.post(
      "http://localhost:8080/user/update?userId=" +
        initialValues.userId +
        "roleId=" +
        initialValues.roleId +
        "&userFirstname=" +
        initialValues.userFirstname +
        "&userLastname=" +
        initialValues.userLastname +
        "&userEmail=" +
        initialValues.userEmail +
        "&nationalityId=" +
        initialValues.nationalityId +
        "&userGender=" +
        initialValues.userGender +
        "&userPhoto=" +
        initialValues.userPhoto +
        "&userPassword=" +
        initialValues.userPassword
    );
  }
  loginUser(initialValues) {
    return axios.get(
      "http://localhost:8080/user/login?nationalityId=" +
        initialValues.nationalityId +
        "&password=" +
        initialValues.userPassword
    );
  }
}
