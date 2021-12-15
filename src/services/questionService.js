import axios from "axios"
import { Component } from "react"
export default class QuestionService extends Component {
  getQuestions() {
    return axios.get("http://localhost:8080/question/getAll")
  }
  getByQuestionId(questionId) {
    return axios.get(
      "http://localhost:8080/question/getByQuestionId?questionId=" + questionId
    )
  }

  getByExamId(examId) {
    return axios.get(
      "http://localhost:8080/question/getByExamId?examId=" + examId
    )
  }
  addQuestion(initialValues) {
    return axios.post(
      "http://localhost:8080/question/add?examId=" +
        initialValues.examId +
        "&questionText=" +
        initialValues.questionText +
        "&optionA=" +
        initialValues.optionA +
        "&optionB=" +
        initialValues.optionB +
        "&optionC=" +
        initialValues.optionC +
        "&optionD=" +
        initialValues.optionD +
        "&optionE=" +
        initialValues.optionE +
        "&trueOption=" +
        initialValues.trueOption
    )
  }
  deleteQuestion(questionId) {
    return axios.post(
      "http://localhost:8080/question/delete?questionId=" + questionId
    )
  }
  updateQuestion(initialValues) {
    return axios.post(
      "http://localhost:8080/question/update?questionId=" +
        initialValues.questionId +
        "&examId=" +
        initialValues.examId +
        "&questionText=" +
        initialValues.questionText +
        "&optionA=" +
        initialValues.optionA +
        "&optionB=" +
        initialValues.optionB +
        "&optionC=" +
        initialValues.optionC +
        "&optionD=" +
        initialValues.optionD +
        "&optionE=" +
        initialValues.optionE +
        "&trueOption=" +
        initialValues.trueOption
    )
  }
}
