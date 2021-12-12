import React from "react";
import { Route } from "react-router";
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
import ExamUpdate from "../pages/AdminPages/Exam/ExamUpdate";
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
import PersonalInformation from "../pages/AdminPages/User/PersonalInformation";
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
export default function AdminRoute() {
  return (
    <div>
      <AdminNavi />
      <Route exact path="/1/admins" component={AdminList} />
      <Route exact path="/1/admin/:adminId" component={AdminDetail} />
      <Route exact path="/1/admin_add" component={AdminAdd} />
      <Route exact path="/1/admin_delete/:adminId" component={AdminDelete} />
      <Route exact path="/1/admin_update/:adminId" component={AdminUpdate} />

      <Route exact path="/1/departments" component={DepartmentList} />
      <Route
        exact
        path="/1/department/:departmentId"
        component={DepartmentDetail}
      />
      <Route exact path="/1/department_add" component={DepartmentAdd} />
      <Route
        exact
        path="/1/department_delete/:departmentId"
        component={DepartmentDelete}
      />
      <Route
        exact
        path="/1/department_update/:departmentId"
        component={DepartmentUpdate}
      />

      <Route exact path="/1/exams" component={ExamList} />
      <Route exact path="/1/exam/:examId" component={ExamDetail} />
      <Route exact path="/1/exam_add" component={ExamAdd} />
      <Route exact path="/1/exam_delete/:examId" component={ExamDelete} />
      <Route exact path="/1/exam_update/:examId" component={ExamUpdate} />

      <Route exact path="/1/faculties" component={FacultyList} />
      <Route exact path="/1/faculty/:facultyId" component={FacultyDetail} />
      <Route exact path="/1/faculty_add" component={FacultyAdd} />
      <Route
        exact
        path="/1/faculty_delete/:facultyId"
        component={FacultyDelete}
      />
      <Route
        exact
        path="/1/faculty_update/:facultyId"
        component={FacultyUpdate}
      />

      <Route exact path="/1/lessons" component={LessonList} />
      <Route exact path="/1/lesson/:lessonId" component={LessonDetail} />
      <Route exact path="/1/lesson_add" component={LessonAdd} />
      <Route exact path="/1/lesson_delete/:lessonId" component={LessonDelete} />
      <Route exact path="/1/lesson_update/:lessonId" component={LessonUpdate} />

      <Route exact path="/1/questions" component={QuestionList} />
      <Route exact path="/1/question/:questionId" component={QuestionDetail} />
      <Route exact path="/1/question_add" component={QuestionAdd} />
      <Route
        exact
        path="/1/question_delete/:questionId"
        component={QuestionDelete}
      />
      <Route
        exact
        path="/1/question_update/:questionId"
        component={QuestionUpdate}
      />

      <Route exact path="/1/questionStudents" component={QuestionStudentList} />
      <Route
        exact
        path="/1/questionStudent/:detailId"
        component={QuestionStudentDetail}
      />
      <Route
        exact
        path="/1/questionStudent_add"
        component={QuestionStudentAdd}
      />
      <Route
        exact
        path="/1/questionStudent_delete/:detailId"
        component={QuestionStudentDelete}
      />
      <Route
        exact
        path="/1/questionStudent_update/:detailId"
        component={QuestionStudentUpdate}
      />

      <Route exact path="/1/students" component={StudentList} />
      <Route exact path="/1/student/:studentId" component={StudentDetail} />
      <Route exact path="/1/student_add" component={StudentAdd} />
      <Route
        exact
        path="/1/student_delete/:studentId"
        component={StudentDelete}
      />
      <Route
        exact
        path="/1/student_update/:studentId"
        component={StudentUpdate}
      />

      <Route
        exact
        path="/1/studentLessonRelationships"
        component={RelationshipList}
      />
      <Route
        exact
        path="/1/studentLessonRelationship/:relationshipId"
        component={RelationshipDetail}
      />
      <Route
        exact
        path="/1/studentLessonRelationship_add"
        component={RelationshipAdd}
      />
      <Route
        exact
        path="/1/studentLessonRelationship_delete/:relationshipId"
        component={RelationshipDelete}
      />
      <Route
        exact
        path="/1/studentLessonRelationship_update/:relationshipId"
        component={RelationshipUpdate}
      />

      <Route exact path="/1/teachers" component={TeacherList} />
      <Route exact path="/1/teacher/:teacherId" component={TeacherDetail} />
      <Route exact path="/1/teacher_add" component={TeacherAdd} />
      <Route
        exact
        path="/1/teacher_delete/:teacherId"
        component={TeacherDelete}
      />
      <Route
        exact
        path="/1/teacher_update/:teacherId"
        component={TeacherUpdate}
      />

      <Route exact path="/1/users" component={UserList} />
      <Route exact path="/1/user/:userId" component={UserDetail} />
      <Route exact path="/1/user_add" component={UserAdd} />
      <Route exact path="/1/user_delete/:userId" component={UserDelete} />
      <Route exact path="/1/user_update/:userId" component={UserUpdate} />

      <Route exact path="/1/userRoles" component={UserRoleList} />
      <Route exact path="/1/userRole/:roleId" component={UserRoleDetail} />
      <Route exact path="/1/userRole_add" component={UserRoleAdd} />
      <Route
        exact
        path="/1/userRole_delete/:roleId"
        component={UserRoleDelete}
      />
      <Route
        exact
        path="/1/userRole_update/:roleId"
        component={UserRoleUpdate}
      />
      <Route exact path="/1/personalInformation" component={PersonalInformation} />
    </div>
  );
}
