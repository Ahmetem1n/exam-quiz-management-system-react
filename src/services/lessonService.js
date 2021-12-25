import axios from "axios"
import { Component } from "react"
export default class LessonService extends Component {
  getLessons() {
    return axios.get("http://localhost:8080/lesson/getAll")
  }
  getByLessonId(lessonId) {
    return axios.get(
      "http://localhost:8080/lesson/getByLessonId?lessonId=" + lessonId
    )
  }

  getByTeacherId(teacherId) {
    return axios.get(
      "http://localhost:8080/lesson/getByTeacherId?teacherId=" + teacherId
    )
  }
  getByStudentId(studentId) {
    return axios.get(
      "http://localhost:8080/lesson/getByStudentId?studentId=" + studentId
    )
  }

  addLesson(initialValues) {
    return axios.post(
      "http://localhost:8080/lesson/add?teacher.teacherId=" +
        initialValues.teacherId +
        "&department.departmentId=" +
        initialValues.departmentId +
        "&lessonName=" +
        initialValues.lessonName +
        "&lessonTeamsCode=" +
        initialValues.lessonTeamsCode +
        "&lessonMaterialLink=" +
        initialValues.lessonMaterialLink
    )
  }
  deleteLesson(lessonId) {
    return axios.post(
      "http://localhost:8080/lesson/delete?lessonId=" + lessonId
    )
  }
  updateLesson(initialValues) {
    return axios.post(
      "http://localhost:8080/lesson/update?lessonId=" +
        initialValues.lessonId +
        "&teacher.teacherId=" +
        initialValues.teacherId +
        "&department.departmentId=" +
        initialValues.departmentId +
        "&lessonName=" +
        initialValues.lessonName +
        "&lessonTeamsCode=" +
        initialValues.lessonTeamsCode +
        "&lessonMaterialLink=" +
        initialValues.lessonMaterialLink
    )
  }
}
