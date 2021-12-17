import axios from "axios"
import { Component } from "react"
export default class ExamService extends Component {
  getExams() {
    return axios.get("http://localhost:8080/exam/getAll")
  }

  getExamsByTeacher(teacherId) {
    return axios.get("http://localhost:8080/exam/getAllByTeacher?teacherId="+teacherId)
  }


  getExamsByStudent(studentId) {
    return axios.get("http://localhost:8080/exam/getAllByStudent?studentId="+studentId)
  }
  getByExamId(examId) {
    return axios.get("http://localhost:8080/exam/getByExamId?examId=" + examId)
  }

  getByLessonId(lessonId) {
    return axios.get("http://localhost:8080/exam/getByLessonId?lessonId=" + lessonId)
  }

  getByActive(lessonId) {
    return axios.get("http://localhost:8080/exam/getByActive?lessonId="+lessonId)
  }

  addExam(initialValues) {
    return axios.post(
      "http://localhost:8080/exam/add?lesson.lessonId=" +
        initialValues.lessonId +
        "&active=" +
        initialValues.active
    )
  }
  deleteExam(examId) {
    return axios.post("http://localhost:8080/exam/delete?examId=" + examId)
  }
  updateExam(initialValues) {
    return axios.post(
      "http://localhost:8080/exam/update?examId=" +
        initialValues.examId +
        "&lesson.lessonId=" +
        initialValues.lessonId +
        "&active=" +
        initialValues.active
    )
  }
}
