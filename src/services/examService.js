import axios from "axios";
import { Component } from "react";
export default class ExamService extends Component {
  getExams() {
    return axios.get("http://localhost:8080/exam/getAll");
  }
  getByExamId(examId) {
    return axios.get("http://localhost:8080/exam/getByExamId?examId=" + examId);
  }
  addExam(initialValues) {
    return axios.post(
      "http://localhost:8080/exam/add?lessonId=" +
        initialValues.lessonId +
        "&active=" +
        initialValues.active
    );
  }
  deleteExam(examId) {
    return axios.post("http://localhost:8080/exam/delete?examId=" + examId);
  }
  updateExam(initialValues) {
    return axios.post(
      "http://localhost:8080/exam/update?examId=" +
        initialValues.examId +
        "&lessonId=" +
        initialValues.lessonId +
        "&active=" +
        initialValues.active
    );
  }
}
