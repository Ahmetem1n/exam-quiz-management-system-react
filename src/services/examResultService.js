import axios from "axios";
import { Component } from "react";
export default class ExamResultService extends Component {
  getResults() {
    return axios.get("http://localhost:8080/examResult/getAll");
  }

  getByResultId(resultId) {
    return axios.get(
      "http://localhost:8080/examResult/getByResultId?resultId=" + resultId
    );
  }

  getByStudentId(studentId) {
    return axios.get(
      "http://localhost:8080/examResult/getByStudentId?studentId=" + studentId
    );
  }

  getByExamIdAndStudentId(examId, studentId) {
    return axios.get(
      "http://localhost:8080/examResult/getByExamIdAndStudentId?examId=" +
        examId +
        "&studentId=" +
        studentId
    );
  }

  addResult(initialValues) {
    return axios.post(
      "http://localhost:8080/examResult/add?exam.examId=" +
        initialValues.examId +
        "&student.studentId=" +
        initialValues.studentId +
        "&result=" +
        initialValues.result
    );
  }

  createResult(examId, studentId) {
    return axios.post(
      "http://localhost:8080/examResult/create?exam.examId=" +
        examId +
        "&student.studentId=" +
        studentId
    );
  }

  deleteResult(resultId) {
    return axios.post(
      "http://localhost:8080/examResult/delete?resultId=" + resultId
    );
  }
  updateResult(initialValues) {
    return axios.post(
      "http://localhost:8080/examResult/update?resultId=" +
        initialValues.resultId +
        "&exam.examId=" +
        initialValues.examId +
        "&student.studentId=" +
        initialValues.studentId +
        "&result=" +
        initialValues.result
    );
  }
}
