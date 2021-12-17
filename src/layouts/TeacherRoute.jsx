import React from "react";
import { Route } from "react-router";
import ExamAdd from "../pages/TeacherPages/Exam/ExamAdd";
import ExamDelete from "../pages/TeacherPages/Exam/ExamDelete";
import ExamListByLessonId from "../pages/TeacherPages/Exam/ExamListByLessonId";
import ExamListTeacher from "../pages/TeacherPages/Exam/ExamListTeacher";
import ExamUpdate from "../pages/TeacherPages/Exam/ExamUpdate";
import LessonList from "../pages/TeacherPages/Lesson/LessonList";
import LessonUpdate from "../pages/TeacherPages/Lesson/LessonUpdate";
import QuestionAdd from "../pages/TeacherPages/Question/QuestionAdd";
import QuestionDelete from "../pages/TeacherPages/Question/QuestionDelete";
import QuestionList from "../pages/TeacherPages/Question/QuestionList";
import QuestionUpdate from "../pages/TeacherPages/Question/QuestionUpdate";
import StudentList from "../pages/TeacherPages/Student/StudentList";
import Student from "../pages/TeacherPages/StudentLessonRelationship/Student";
import TeacherHomePage from "../pages/TeacherPages/TeacherHomePage";
import PersonalInformation from "./PersonalInformation";
import TeacherNavi from "./TeacherNavi";

export default function TeacherRoute() {
  return (
    <div>
      <TeacherNavi />
      <Route exact path="/" component={TeacherHomePage} />
      <Route exact path="/exams" component={ExamListTeacher} />
      <Route exact path="/exams/:lessonId" component={ExamListByLessonId} />
      <Route exact path="/exam_add" component={ExamAdd} />
      <Route exact path="/exam_delete/:examId" component={ExamDelete} />
      <Route exact path="/exam_update/:examId" component={ExamUpdate} />

      <Route exact path="/lessons" component={LessonList} />
      <Route exact path="/lesson_update/:lessonId" component={LessonUpdate} />

      <Route exact path="/questions/:examId" component={QuestionList} />
      <Route exact path="/question_add" component={QuestionAdd} />
      <Route
        exact
        path="/question_delete/:questionId"
        component={QuestionDelete}
      />
      <Route
        exact
        path="/question_update/:questionId"
        component={QuestionUpdate}
      />

      <Route exact path="/students" component={StudentList} />
      <Route exact path="/studentLesson/:lessonId" component={Student} />
      <Route
        exact
        path="/personalInformation"
        component={PersonalInformation}
      />
    </div>
  );
}
