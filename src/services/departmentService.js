import axios from "axios"
import { Component } from "react"
export default class DepartmentService extends Component {
  getDepartments() {
    return axios.get("http://localhost:8080/department/getAll")
  }
  getByDepartmentId(departmentId) {
    return axios.get(
      "http://localhost:8080/department/getByDepartmentId?departmentId=" +
        departmentId
    )
  }
  addDepartment(initialValues) {
    return axios.post(
      "http://localhost:8080/department/add?faculty.facultyId=" +
        initialValues.facultyId +
        "&departmentName=" +
        initialValues.departmentName
    )
  }
  deleteDepartment(departmentId) {
    return axios.post(
      "http://localhost:8080/department/delete?departmentId=" + departmentId
    )
  }
  updateDepartment(initialValues) {
    return axios.post(
      "http://localhost:8080/department/update?departmentId=" +
        initialValues.departmentId +
        "&facultyId=" +
        initialValues.facultyId +
        "&departmentName=" +
        initialValues.departmentName
    )
  }
}
