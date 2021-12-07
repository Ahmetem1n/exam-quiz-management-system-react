import axios from "axios";
import { Component } from "react";
export default class TeacherService extends Component {
  getTeachers() {
    return axios.get("http://localhost:8080/teacher/getAll");
  }
  getByTeacherId(teacherId) {
    return axios.get(
      "http://localhost:8080/teacher/getByTeacherId?teacherId=" + teacherId
    );
  }
  addTeacher(initialValues) {
    return axios.post(
      "http://localhost:8080/teacher/add?userId=" +
        initialValues.userId +
        "&profession=" +
        initialValues.profession
    );
  }
  deleteTeacher(teacherId) {
    return axios.post(
      "http://localhost:8080/teacher/delete?teacherId=" + teacherId
    );
  }
  updateTeacher(initialValues) {
    return axios.post(
      "http://localhost:8080/teacher/update?teacherId=" +
        initialValues.teacherId +
        "userId=" +
        initialValues.userId +
        "&profession=" +
        initialValues.profession
    );
  }
}
