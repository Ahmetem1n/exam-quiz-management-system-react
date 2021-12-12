import React from "react";
import { Route } from "react-router";
import ExamDetail from "../pages/StudentPages/Exam/ExamDetail";
import ExamList from "../pages/StudentPages/Exam/ExamList";
import ExamPage from "../pages/StudentPages/Exam/ExamPage";
import LessonDetail from "../pages/StudentPages/Lesson/LessonDetail";
import LessonList from "../pages/StudentPages/Lesson/LessonList";
import QuestionDetail from "../pages/StudentPages/Question/QuestionDetail";
import QuestionList from "../pages/StudentPages/Question/QuestionList";
import QuestionStudentAdd from "../pages/StudentPages/QuestionStudent/QuestionStudentAdd";
import QuestionStudentDelete from "../pages/StudentPages/QuestionStudent/QuestionStudentDelete";
import QuestionStudentDetail from "../pages/StudentPages/QuestionStudent/QuestionStudentDetail";
import QuestionStudentList from "../pages/StudentPages/QuestionStudent/QuestionStudentList";
import QuestionStudentUpdate from "../pages/StudentPages/QuestionStudent/QuestionStudentUpdate";
import RelationshipAdd from "../pages/StudentPages/StudentLessonRelationship/RelationshipAdd";
import RelationshipDelete from "../pages/StudentPages/StudentLessonRelationship/RelationshipDelete";
import RelationshipDetail from "../pages/StudentPages/StudentLessonRelationship/RelationshipDetail";
import RelationshipList from "../pages/StudentPages/StudentLessonRelationship/RelationshipList";
import RelationshipUpdate from "../pages/StudentPages/StudentLessonRelationship/RelationshipUpdate";
import TeacherDetail from "../pages/StudentPages/Teacher/TeacherDetail";
import TeacherList from "../pages/StudentPages/Teacher/TeacherList";

import StudentNavi from "./StudentNavi";

export default function StudentRoute() {
  return (
    <div>
      <StudentNavi />
      <Route exact path="/3/exams" component={ExamList} />
      <Route exact path="/3/exam/:examId" component={ExamDetail} />
      <Route exact path="/3/exam_start" component={ExamPage} />

      <Route exact path="/3/lessons" component={LessonList} />
      <Route exact path="/3/lesson/:lessonId" component={LessonDetail} />

      <Route exact path="/3/questions" component={QuestionList} />
      <Route exact path="/3/question/:questionId" component={QuestionDetail} />

      <Route exact path="/3/questionStudents" component={QuestionStudentList} />
      <Route
        exact
        path="/3/questionStudent/:detailId"
        component={QuestionStudentDetail}
      />
      <Route
        exact
        path="/3/questionStudent_add"
        component={QuestionStudentAdd}
      />
      <Route
        exact
        path="/3/questionStudent_delete/:detailId"
        component={QuestionStudentDelete}
      />
      <Route
        exact
        path="/3/questionStudent_update/:detailId"
        component={QuestionStudentUpdate}
      />

      <Route
        exact
        path="/3/studentLessonRelationships"
        component={RelationshipList}
      />
      <Route
        exact
        path="/3/studentLessonRelationship/:relationshipId"
        component={RelationshipDetail}
      />
      <Route
        exact
        path="/3/studentLessonRelationship_add"
        component={RelationshipAdd}
      />
      <Route
        exact
        path="/3/studentLessonRelationship_delete/:relationshipId"
        component={RelationshipDelete}
      />
      <Route
        exact
        path="/3/studentLessonRelationship_update/:relationshipId"
        component={RelationshipUpdate}
      />

      <Route exact path="/3/teachers" component={TeacherList} />
      <Route exact path="/3/teacher/:teacherId" component={TeacherDetail} />
    </div>
  );
}
