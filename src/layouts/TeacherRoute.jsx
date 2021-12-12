import React from "react";
import { Route } from "react-router";
import ExamAdd from "../pages/TeacherPages/Exam/ExamAdd";
import ExamDelete from "../pages/TeacherPages/Exam/ExamDelete";
import ExamDetail from "../pages/TeacherPages/Exam/ExamDetail";
import ExamList from "../pages/TeacherPages/Exam/ExamList";
import ExamUpdate from "../pages/TeacherPages/Exam/ExamUpdate";
import LessonDetail from "../pages/TeacherPages/Lesson/LessonDetail";
import LessonList from "../pages/TeacherPages/Lesson/LessonList";
import LessonUpdate from "../pages/TeacherPages/Lesson/LessonUpdate";
import QuestionAdd from "../pages/TeacherPages/Question/QuestionAdd";
import QuestionDelete from "../pages/TeacherPages/Question/QuestionDelete";
import QuestionDetail from "../pages/TeacherPages/Question/QuestionDetail";
import QuestionList from "../pages/TeacherPages/Question/QuestionList";
import QuestionUpdate from "../pages/TeacherPages/Question/QuestionUpdate";
import QuestionStudentAdd from "../pages/TeacherPages/QuestionStudent/QuestionStudentAdd";
import QuestionStudentDelete from "../pages/TeacherPages/QuestionStudent/QuestionStudentDelete";
import QuestionStudentDetail from "../pages/TeacherPages/QuestionStudent/QuestionStudentDetail";
import QuestionStudentList from "../pages/TeacherPages/QuestionStudent/QuestionStudentList";
import QuestionStudentUpdate from "../pages/TeacherPages/QuestionStudent/QuestionStudentUpdate";
import StudentDetail from "../pages/TeacherPages/Student/StudentDetail";
import StudentList from "../pages/TeacherPages/Student/StudentList";
import RelationshipAdd from "../pages/TeacherPages/StudentLessonRelationship/RelationshipAdd";
import RelationshipDelete from "../pages/TeacherPages/StudentLessonRelationship/RelationshipDelete";
import RelationshipDetail from "../pages/TeacherPages/StudentLessonRelationship/RelationshipDetail";
import RelationshipList from "../pages/TeacherPages/StudentLessonRelationship/RelationshipList";
import RelationshipUpdate from "../pages/TeacherPages/StudentLessonRelationship/RelationshipUpdate";
import TeacherNavi from "./TeacherNavi";

export default function TeacherRoute() {
  return (
    <div>
      <TeacherNavi />
      <Route exact path="/2/exams" component={ExamList} />
      <Route exact path="/2/exams/:lessonId" component={ExamList} />
      <Route exact path="/2/exam/:examId" component={ExamDetail} />
      <Route exact path="/2/exam_add" component={ExamAdd} />
      <Route exact path="/2/exam_delete/:examId" component={ExamDelete} />
      <Route exact path="/2/exam_update/:examId" component={ExamUpdate} />

      <Route exact path="/2/lessons" component={LessonList} />
      <Route exact path="/2/lesson/:lessonId" component={LessonDetail} />
      <Route exact path="/2/lesson_update/:lessonId" component={LessonUpdate} />

      <Route exact path="/2/questions/:examId" component={QuestionList} />
      <Route exact path="/2/question/:questionId" component={QuestionDetail} />
      <Route exact path="/2/question_add" component={QuestionAdd} />
      <Route
        exact
        path="/2/question_delete/:questionId"
        component={QuestionDelete}
      />
      <Route
        exact
        path="/2/question_update/:questionId"
        component={QuestionUpdate}
      />

      <Route exact path="/2/questionStudents" component={QuestionStudentList} />
      <Route
        exact
        path="/2/questionStudent/:detailId"
        component={QuestionStudentDetail}
      />
      <Route
        exact
        path="/2/questionStudent_add"
        component={QuestionStudentAdd}
      />
      <Route
        exact
        path="/2/questionStudent_delete/:detailId"
        component={QuestionStudentDelete}
      />
      <Route
        exact
        path="/2/questionStudent_update/:detailId"
        component={QuestionStudentUpdate}
      />

      <Route exact path="/2/students" component={StudentList} />
      <Route exact path="/2/student/:studentId" component={StudentDetail} />

      <Route
        exact
        path="/2/studentLessonRelationships"
        component={RelationshipList}
      />
      <Route
        exact
        path="/2/studentLessonRelationship/:relationshipId"
        component={RelationshipDetail}
      />
      <Route
        exact
        path="/2/studentLessonRelationship_add"
        component={RelationshipAdd}
      />
      <Route
        exact
        path="/2/studentLessonRelationship_delete/:relationshipId"
        component={RelationshipDelete}
      />
      <Route
        exact
        path="/2/studentLessonRelationship_update/:relationshipId"
        component={RelationshipUpdate}
      />
    </div>
  );
}
