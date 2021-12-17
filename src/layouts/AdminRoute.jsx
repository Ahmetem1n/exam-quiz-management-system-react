import React from "react";
import { Route } from "react-router";
import AdminHomePage from "../pages/AdminPages/AdminHomePage";
import AdminAdd from "../pages/AdminPages/Admins/AdminAdd";
import AdminDelete from "../pages/AdminPages/Admins/AdminDelete";
import AdminDetail from "../pages/AdminPages/Admins/AdminDetail";
import AdminList from "../pages/AdminPages/Admins/AdminList";
import AdminUpdate from "../pages/AdminPages/Admins/AdminUpdate";
import DepartmentAdd from "../pages/AdminPages/Department/DepartmentAdd";
import DepartmentDelete from "../pages/AdminPages/Department/DepartmentDelete";
import DepartmentDetail from "../pages/AdminPages/Department/DepartmentDetail";
import DepartmentList from "../pages/AdminPages/Department/DepartmentList";
import DepartmentUpdate from "../pages/AdminPages/Department/DepartmentUpdate";
import ExamAdd from "../pages/AdminPages/Exam/ExamAdd";
import ExamDelete from "../pages/AdminPages/Exam/ExamDelete";
import ExamDetail from "../pages/AdminPages/Exam/ExamDetail";
import ExamList from "../pages/AdminPages/Exam/ExamList";
import ExamListByLessonId from "../pages/AdminPages/Exam/ExamListByLessonId";
import ExamUpdate from "../pages/AdminPages/Exam/ExamUpdate";
import ExamResultAdd from "../pages/AdminPages/ExamResult/ExamResultAdd";
import ExamResultDelete from "../pages/AdminPages/ExamResult/ExamResultDelete";
import ExamResultDetail from "../pages/AdminPages/ExamResult/ExamResultDetail";
import ExamResultList from "../pages/AdminPages/ExamResult/ExamResultList";
import ExamResultUpdate from "../pages/AdminPages/ExamResult/ExamResultUpdate";
import FacultyAdd from "../pages/AdminPages/Faculty/FacultyAdd";
import FacultyDelete from "../pages/AdminPages/Faculty/FacultyDelete";
import FacultyDetail from "../pages/AdminPages/Faculty/FacultyDetail";
import FacultyList from "../pages/AdminPages/Faculty/FacultyList";
import FacultyUpdate from "../pages/AdminPages/Faculty/FacultyUpdate";
import LessonAdd from "../pages/AdminPages/Lesson/LessonAdd";
import LessonDelete from "../pages/AdminPages/Lesson/LessonDelete";
import LessonDetail from "../pages/AdminPages/Lesson/LessonDetail";
import LessonList from "../pages/AdminPages/Lesson/LessonList";
import LessonUpdate from "../pages/AdminPages/Lesson/LessonUpdate";
import QuestionAdd from "../pages/AdminPages/Question/QuestionAdd";
import QuestionDelete from "../pages/AdminPages/Question/QuestionDelete";
import QuestionDetail from "../pages/AdminPages/Question/QuestionDetail";
import QuestionList from "../pages/AdminPages/Question/QuestionList";
import QuestionListByExamId from "../pages/AdminPages/Question/QuestionListByExamId";
import QuestionUpdate from "../pages/AdminPages/Question/QuestionUpdate";
import QuestionStudentAdd from "../pages/AdminPages/QuestionStudent/QuestionStudentAdd";
import QuestionStudentDelete from "../pages/AdminPages/QuestionStudent/QuestionStudentDelete";
import QuestionStudentDetail from "../pages/AdminPages/QuestionStudent/QuestionStudentDetail";
import QuestionStudentList from "../pages/AdminPages/QuestionStudent/QuestionStudentList";
import QuestionStudentUpdate from "../pages/AdminPages/QuestionStudent/QuestionStudentUpdate";
import StudentAdd from "../pages/AdminPages/Student/StudentAdd";
import StudentDelete from "../pages/AdminPages/Student/StudentDelete";
import StudentDetail from "../pages/AdminPages/Student/StudentDetail";
import StudentList from "../pages/AdminPages/Student/StudentList";
import StudentUpdate from "../pages/AdminPages/Student/StudentUpdate";
import RelationshipAdd from "../pages/AdminPages/StudentLessonRelationship/RelationshipAdd";
import RelationshipDelete from "../pages/AdminPages/StudentLessonRelationship/RelationshipDelete";
import RelationshipDetail from "../pages/AdminPages/StudentLessonRelationship/RelationshipDetail";
import RelationshipList from "../pages/AdminPages/StudentLessonRelationship/RelationshipList";
import RelationshipUpdate from "../pages/AdminPages/StudentLessonRelationship/RelationshipUpdate";
import TeacherAdd from "../pages/AdminPages/Teacher/TeacherAdd";
import TeacherDelete from "../pages/AdminPages/Teacher/TeacherDelete";
import TeacherDetail from "../pages/AdminPages/Teacher/TeacherDetail";
import TeacherList from "../pages/AdminPages/Teacher/TeacherList";
import TeacherUpdate from "../pages/AdminPages/Teacher/TeacherUpdate";
import UserAdd from "../pages/AdminPages/User/UserAdd";
import UserDelete from "../pages/AdminPages/User/UserDelete";
import UserDetail from "../pages/AdminPages/User/UserDetail";
import UserList from "../pages/AdminPages/User/UserList";
import UserUpdate from "../pages/AdminPages/User/UserUpdate";
import UserRoleAdd from "../pages/AdminPages/UserRole/UserRoleAdd";
import UserRoleDelete from "../pages/AdminPages/UserRole/UserRoleDelete";
import UserRoleDetail from "../pages/AdminPages/UserRole/UserRoleDetail";
import UserRoleList from "../pages/AdminPages/UserRole/UserRoleList";
import UserRoleUpdate from "../pages/AdminPages/UserRole/UserRoleUpdate";
import AdminNavi from "./AdminNavi";
import PersonalInformation from "./PersonalInformation";
export default function AdminRoute() {
  return (
    <div>
      <AdminNavi />

      <Route exact path="/" component={AdminHomePage} />
      <Route exact path="/admins" component={AdminList} />
      <Route exact path="/admin/:adminId" component={AdminDetail} />
      <Route exact path="/admin_add" component={AdminAdd} />
      <Route exact path="/admin_delete/:adminId" component={AdminDelete} />
      <Route exact path="/admin_update/:adminId" component={AdminUpdate} />

      <Route exact path="/departments" component={DepartmentList} />
      <Route
        exact
        path="/department/:departmentId"
        component={DepartmentDetail}
      />
      <Route exact path="/department_add" component={DepartmentAdd} />
      <Route
        exact
        path="/department_delete/:departmentId"
        component={DepartmentDelete}
      />
      <Route
        exact
        path="/department_update/:departmentId"
        component={DepartmentUpdate}
      />

      <Route exact path="/exams" component={ExamList} />
      <Route exact path="/exams/:lessonId" component={ExamListByLessonId} />
      <Route exact path="/exam/:examId" component={ExamDetail} />
      <Route exact path="/exam_add" component={ExamAdd} />
      <Route exact path="/exam_delete/:examId" component={ExamDelete} />
      <Route exact path="/exam_update/:examId" component={ExamUpdate} />

      <Route exact path="/examResults" component={ExamResultList} />
      <Route exact path="/examResult/:resultId" component={ExamResultDetail} />
      <Route exact path="/examResult_add" component={ExamResultAdd} />
      <Route
        exact
        path="/examResult_delete/:resultId"
        component={ExamResultDelete}
      />
      <Route
        exact
        path="/examResult_update/:resultId"
        component={ExamResultUpdate}
      />

      <Route exact path="/faculties" component={FacultyList} />
      <Route exact path="/faculty/:facultyId" component={FacultyDetail} />
      <Route exact path="/faculty_add" component={FacultyAdd} />
      <Route
        exact
        path="/faculty_delete/:facultyId"
        component={FacultyDelete}
      />
      <Route
        exact
        path="/faculty_update/:facultyId"
        component={FacultyUpdate}
      />

      <Route exact path="/lessons" component={LessonList} />
      <Route exact path="/lesson/:lessonId" component={LessonDetail} />
      <Route exact path="/lesson_add" component={LessonAdd} />
      <Route exact path="/lesson_delete/:lessonId" component={LessonDelete} />
      <Route exact path="/lesson_update/:lessonId" component={LessonUpdate} />

      <Route exact path="/questions" component={QuestionList} />
      <Route exact path="/questions/:examId" component={QuestionListByExamId} />
      <Route exact path="/question/:questionId" component={QuestionDetail} />
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

      <Route exact path="/questionStudents" component={QuestionStudentList} />
      <Route
        exact
        path="/questionStudent/:detailId"
        component={QuestionStudentDetail}
      />
      <Route exact path="/questionStudent_add" component={QuestionStudentAdd} />
      <Route
        exact
        path="/questionStudent_delete/:detailId"
        component={QuestionStudentDelete}
      />
      <Route
        exact
        path="/questionStudent_update/:detailId"
        component={QuestionStudentUpdate}
      />

      <Route exact path="/students" component={StudentList} />
      <Route exact path="/student/:studentId" component={StudentDetail} />
      <Route exact path="/student_add" component={StudentAdd} />
      <Route
        exact
        path="/student_delete/:studentId"
        component={StudentDelete}
      />
      <Route
        exact
        path="/student_update/:studentId"
        component={StudentUpdate}
      />

      <Route
        exact
        path="/studentLessonRelationships"
        component={RelationshipList}
      />
      <Route
        exact
        path="/studentLessonRelationship/:relationshipId"
        component={RelationshipDetail}
      />
      <Route
        exact
        path="/studentLessonRelationship_add"
        component={RelationshipAdd}
      />
      <Route
        exact
        path="/studentLessonRelationship_delete/:relationshipId"
        component={RelationshipDelete}
      />
      <Route
        exact
        path="/studentLessonRelationship_update/:relationshipId"
        component={RelationshipUpdate}
      />

      <Route exact path="/teachers" component={TeacherList} />
      <Route exact path="/teacher/:teacherId" component={TeacherDetail} />
      <Route exact path="/teacher_add" component={TeacherAdd} />
      <Route
        exact
        path="/teacher_delete/:teacherId"
        component={TeacherDelete}
      />
      <Route
        exact
        path="/teacher_update/:teacherId"
        component={TeacherUpdate}
      />

      <Route exact path="/users" component={UserList} />
      <Route exact path="/user/:userId" component={UserDetail} />
      <Route exact path="/user_add" component={UserAdd} />
      <Route exact path="/user_delete/:userId" component={UserDelete} />
      <Route exact path="/user_update/:userId" component={UserUpdate} />

      <Route exact path="/userRoles" component={UserRoleList} />
      <Route exact path="/userRole/:roleId" component={UserRoleDetail} />
      <Route exact path="/userRole_add" component={UserRoleAdd} />
      <Route exact path="/userRole_delete/:roleId" component={UserRoleDelete} />
      <Route exact path="/userRole_update/:roleId" component={UserRoleUpdate} />
      <Route
        exact
        path="/personalInformation"
        component={PersonalInformation}
      />
    </div>
  );
}
