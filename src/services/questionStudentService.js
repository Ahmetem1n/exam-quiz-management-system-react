import axios from "axios";
import { Component } from "react";
export default class QuestionStudentService extends Component {
  getQuestionStudents() {
    return axios.get("http://localhost:8080/questionStudent/getAll");
  }
  getByDetailId(detailId) {
    return axios.get(
      "http://localhost:8080/questionStudent/getByDetailId?detailId=" + detailId
    );
  }
  addQuestionStudent(initialValues) {
    return axios.post(
      "http://localhost:8080/questionStudent/add?questionId=" +
        initialValues.questionId +
        "&=studentId" +
        initialValues.studentId
    );
  }
  deleteQuestionStudent(detailId) {
    return axios.post(
      "http://localhost:8080/questionStudent/delete?detailId=" + detailId
    );
  }
  updateQuestionStudent(initialValues) {
    return axios.post(
      "http://localhost:8080/questionStudent/update?detailId=" +
        initialValues.detailId +
        "&=questionId" +
        initialValues.questionId +
        "&=studentId" +
        initialValues.studentId
    );
  }
}
