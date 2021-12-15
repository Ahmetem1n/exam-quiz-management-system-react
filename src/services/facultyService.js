import axios from "axios"
import { Component } from "react"
export default class FacultyService extends Component {
  getFaculties() {
    return axios.get("http://localhost:8080/faculty/getAll")
  }
  getByFacultyId(facultyId) {
    return axios.get(
      "http://localhost:8080/faculty/getByFacultyId?facultyId=" + facultyId
    )
  }
  addFaculty(initialValues) {
    return axios.post(
      "http://localhost:8080/faculty/add?facultyName=" +
        initialValues.facultyName
    )
  }
  deleteFaculty(facultyId) {
    return axios.post(
      "http://localhost:8080/faculty/delete?facultyId=" + facultyId
    )
  }
  updateFaculty(initialValues) {
    return axios.post(
      "http://localhost:8080/faculty/update?facultyId=" +
        initialValues.facultyId +
        "&facultyName=" +
        initialValues.facultyName
    )
  }
}
