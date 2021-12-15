import axios from "axios"
import { Component } from "react"
export default class StudentService extends Component {
  getStudents() {
    return axios.get("http://localhost:8080/student/getAll")
  }
  getByStudentId(studentId) {
    return axios.get(
      "http://localhost:8080/student/getByStudentId?studentId=" + studentId
    )
  }

  getByUserId(userId) {
    return axios.get(
      "http://localhost:8080/student/getByUserId?userId=" + userId
    )
  }

  addStudent(initialValues) {
    return axios.post(
      "http://localhost:8080/student/add?userId=" +
        initialValues.userId +
        "&studentNumber=" +
        initialValues.studentNumber +
        "&studentGrade=" +
        initialValues.studentGrade +
        "&departmentId=" +
        initialValues.departmentId
    )
  }
  deleteStudent(studentId) {
    return axios.post(
      "http://localhost:8080/student/delete?studentId=" + studentId
    )
  }
  updateStudent(initialValues) {
    return axios.post(
      "http://localhost:8080/student/update?studentId=" +
        initialValues.studentId +
        "userId=" +
        initialValues.userId +
        "&studentNumber=" +
        initialValues.studentNumber +
        "&studentGrade=" +
        initialValues.studentGrade +
        "&departmentId=" +
        initialValues.departmentId
    )
  }
}
