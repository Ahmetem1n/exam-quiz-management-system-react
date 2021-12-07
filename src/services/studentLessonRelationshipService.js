import axios from "axios";
import { Component } from "react";
export default class StudentLessonRelationshipService extends Component {
  getRelationships() {
    return axios.get("http://localhost:8080/studentLessonRelationship/getAll");
  }
  getByRelationshipId(relationshipId) {
    return axios.get(
      "http://localhost:8080/studentLessonRelationship/getByRelationshipId?relationshipId=" +
        relationshipId
    );
  }
  addRelationship(initialValues) {
    return axios.post(
      "http://localhost:8080/studentLessonRelationship/add?lessonId=" +
        initialValues.lessonId +
        "&studentId=" +
        initialValues.studentId
    );
  }
  deleteRelationship(relationshipId) {
    return axios.post(
      "http://localhost:8080/studentLessonRelationship/delete?relationshipId=" +
        relationshipId
    );
  }
  updateRelationship(initialValues) {
    return axios.post(
      "http://localhost:8080/studentLessonRelationship/update?relationshipId=" +
        initialValues.relationshipId +
        "&lessonId=" +
        initialValues.lessonId +
        "&studentId=" +
        initialValues.studentId
    );
  }
}
