import axios from "axios"
import { Component } from "react"
export default class UserRoleService extends Component {
  getUserRoles() {
    return axios.get("http://localhost:8080/userRole/getAll")
  }
  getByRoleId(roleId) {
    return axios.get(
      "http://localhost:8080/userRole/getByRoleId?roleId=" + roleId
    )
  }
  addRole(initialValues) {
    return axios.post(
      "http://localhost:8080/userRole/add?roleName=" + initialValues.roleName
    )
  }
  deleteRole(roleId) {
    return axios.post("http://localhost:8080/userRole/delete?roleId=" + roleId)
  }
  updateRole(initialValues) {
    return axios.post(
      "http://localhost:8080/userRole/update?roleId=" +
        initialValues.roleId +
        "&roleName=" +
        initialValues.roleName
    )
  }
}
