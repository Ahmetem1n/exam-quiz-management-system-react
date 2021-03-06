import React from "react";
import { Route } from "react-router";
import ExamList from "../pages/StudentPages/Exam/ExamList";
import ExamListLessonId from "../pages/StudentPages/Exam/ExamListLessonId";
import ExamPage from "../pages/StudentPages/Exam/ExamPage";
import ExamResultList from "../pages/StudentPages/ExamResult/ExamResultList";
import LessonList from "../pages/StudentPages/Lesson/LessonList";
import StudentHomePage from "../pages/StudentPages/StudentHomePage";
import TeacherList from "../pages/StudentPages/Teacher/TeacherList";
import PersonalInformation from "../pages/StudentPages/PersonalInformation";
import StudentNavi from "./StudentNavi";
import PersonalInformationUpdate from "../pages/PersonalInformationUpdate";

export default function StudentRoute() {
  return (
    <div>
      <StudentNavi />
      <Route exact path="/" component={StudentHomePage} />
      <Route exact path="/exams" component={ExamList} />
      <Route exact path="/exams/:lessonId" component={ExamListLessonId} />
      <Route exact path="/exam_page" component={ExamPage} />

      <Route exact path="/examResults" component={ExamResultList} />

      <Route exact path="/lessons" component={LessonList} />

      <Route exact path="/teachers" component={TeacherList} />
      <Route
        exact
        path="/personalInformation"
        component={PersonalInformation}
      />
      <Route
        exact
        path="/personalInformation_update"
        component={PersonalInformationUpdate}
      />
    </div>
  );
}
