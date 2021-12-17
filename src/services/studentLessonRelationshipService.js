import axios from "axios"
import { Component } from "react"
export default class StudentLessonRelationshipService extends Component {
  getRelationships() {
    return axios.get("http://localhost:8080/studentLessonRelationship/getAll")
  }
  getByRelationshipId(relationshipId) {
    return axios.get(
      "http://localhost:8080/studentLessonRelationship/getByRelationshipId?relationshipId=" +
        relationshipId
    )
  }

  getByLessonId(lessonId) {
    return axios.get(
      "http://localhost:8080/studentLessonRelationship/getByLessonId?lessonId=" +
      lessonId
    )
  }

  getByStudentId(studentId) {
    return axios.get(
      "http://localhost:8080/studentLessonRelationship/getByStudentId?studentId=" +
      studentId
    )
  }

  getByTeacher(teacherId) {
    return axios.get(
      "http://localhost:8080/studentLessonRelationship/getByTeacher?teacherId=" +
      teacherId
    )
  }

  addRelationship(initialValues) {
    return axios.post(
      "http://localhost:8080/studentLessonRelationship/add?lesson.lessonId=" +
        initialValues.lessonId +
        "&student.studentId=" +
        initialValues.studentId
    )
  }
  deleteRelationship(relationshipId) {
    return axios.post(
      "http://localhost:8080/studentLessonRelationship/delete?relationshipId=" +
        relationshipId
    )
  }
  updateRelationship(initialValues) {
    return axios.post(
      "http://localhost:8080/studentLessonRelationship/update?relationshipId=" +
        initialValues.relationshipId +
        "&lesson.lessonId=" +
        initialValues.lessonId +
        "&student.studentId=" +
        initialValues.studentId
    )
  }
}
