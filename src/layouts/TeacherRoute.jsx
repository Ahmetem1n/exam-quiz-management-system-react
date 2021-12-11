import React from "react";
import { Route } from "react-router";
import AdminAdd from "../pages/TeacherPages/Admins/AdminAdd";
import AdminDelete from "../pages/TeacherPages/Admins/AdminDelete";
import AdminDetail from "../pages/TeacherPages/Admins/AdminDetail";
import AdminList from "../pages/TeacherPages/Admins/AdminList";
import AdminUpdate from "../pages/TeacherPages/Admins/AdminUpdate";
import DepartmentAdd from "../pages/TeacherPages/Department/DepartmentAdd";
import DepartmentDelete from "../pages/TeacherPages/Department/DepartmentDelete";
import DepartmentDetail from "../pages/TeacherPages/Department/DepartmentDetail";
import DepartmentList from "../pages/TeacherPages/Department/DepartmentList";
import DepartmentUpdate from "../pages/TeacherPages/Department/DepartmentUpdate";
import ExamAdd from "../pages/TeacherPages/Exam/ExamAdd";
import ExamDelete from "../pages/TeacherPages/Exam/ExamDelete";
import ExamDetail from "../pages/TeacherPages/Exam/ExamDetail";
import ExamList from "../pages/TeacherPages/Exam/ExamList";
import ExamUpdate from "../pages/TeacherPages/Exam/ExamUpdate";
import FacultyAdd from "../pages/TeacherPages/Faculty/FacultyAdd";
import FacultyDelete from "../pages/TeacherPages/Faculty/FacultyDelete";
import FacultyDetail from "../pages/TeacherPages/Faculty/FacultyDetail";
import FacultyList from "../pages/TeacherPages/Faculty/FacultyList";
import FacultyUpdate from "../pages/TeacherPages/Faculty/FacultyUpdate";
import LessonAdd from "../pages/TeacherPages/Lesson/LessonAdd";
import LessonDelete from "../pages/TeacherPages/Lesson/LessonDelete";
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
import StudentAdd from "../pages/TeacherPages/Student/StudentAdd";
import StudentDelete from "../pages/TeacherPages/Student/StudentDelete";
import StudentDetail from "../pages/TeacherPages/Student/StudentDetail";
import StudentList from "../pages/TeacherPages/Student/StudentList";
import StudentUpdate from "../pages/TeacherPages/Student/StudentUpdate";
import RelationshipAdd from "../pages/TeacherPages/StudentLessonRelationship/RelationshipAdd";
import RelationshipDelete from "../pages/TeacherPages/StudentLessonRelationship/RelationshipDelete";
import RelationshipDetail from "../pages/TeacherPages/StudentLessonRelationship/RelationshipDetail";
import RelationshipList from "../pages/TeacherPages/StudentLessonRelationship/RelationshipList";
import RelationshipUpdate from "../pages/TeacherPages/StudentLessonRelationship/RelationshipUpdate";
import TeacherAdd from "../pages/TeacherPages/Teacher/TeacherAdd";
import TeacherDelete from "../pages/TeacherPages/Teacher/TeacherDelete";
import TeacherDetail from "../pages/TeacherPages/Teacher/TeacherDetail";
import TeacherList from "../pages/TeacherPages/Teacher/TeacherList";
import TeacherUpdate from "../pages/TeacherPages/Teacher/TeacherUpdate";
import UserAdd from "../pages/TeacherPages/User/UserAdd";
import UserDelete from "../pages/TeacherPages/User/UserDelete";
import UserDetail from "../pages/TeacherPages/User/UserDetail";
import UserList from "../pages/TeacherPages/User/UserList";
import UserLogin from "../pages/TeacherPages/User/UserLogin";
import UserUpdate from "../pages/TeacherPages/User/UserUpdate";
import UserRoleAdd from "../pages/TeacherPages/UserRole/UserRoleAdd";
import UserRoleDelete from "../pages/TeacherPages/UserRole/UserRoleDelete";
import UserRoleDetail from "../pages/TeacherPages/UserRole/UserRoleDetail";
import UserRoleList from "../pages/TeacherPages/UserRole/UserRoleList";
import UserRoleUpdate from "../pages/TeacherPages/UserRole/UserRoleUpdate";
import TeacherNavi from "./TeacherNavi";

export default function TeacherRoute() {
  return (
    <div>
      <TeacherNavi x={2} />
      <Route exact path="/" component={UserLogin} />
      <Route exact path="/2/admins" component={AdminList} />
      <Route exact path="/2/admin/:adminId" component={AdminDetail} />
      <Route exact path="/2/admin_add" component={AdminAdd} />
      <Route exact path="/2/admin_delete/:adminId" component={AdminDelete} />
      <Route exact path="/2/admin_update/:adminId" component={AdminUpdate} />

      <Route exact path="/2/departments" component={DepartmentList} />
      <Route
        exact
        path="/2/department/:departmentId"
        component={DepartmentDetail}
      />
      <Route exact path="/2/department_add" component={DepartmentAdd} />
      <Route
        exact
        path="/2/department_delete/:departmentId"
        component={DepartmentDelete}
      />
      <Route
        exact
        path="/2/department_update/:departmentId"
        component={DepartmentUpdate}
      />

      <Route exact path="/2/exams" component={ExamList} />
      <Route exact path="/2/exam/:examId" component={ExamDetail} />
      <Route exact path="/2/exam_add" component={ExamAdd} />
      <Route exact path="/2/exam_delete/:examId" component={ExamDelete} />
      <Route exact path="/2/exam_update/:examId" component={ExamUpdate} />

      <Route exact path="/2/faculties" component={FacultyList} />
      <Route exact path="/2/faculty/:facultyId" component={FacultyDetail} />
      <Route exact path="/2/faculty_add" component={FacultyAdd} />
      <Route
        exact
        path="/2/faculty_delete/:facultyId"
        component={FacultyDelete}
      />
      <Route
        exact
        path="/2/faculty_update/:facultyId"
        component={FacultyUpdate}
      />

      <Route exact path="/2/lessons" component={LessonList} />
      <Route exact path="/2/lesson/:lessonId" component={LessonDetail} />
      <Route exact path="/2/lesson_add" component={LessonAdd} />
      <Route exact path="/2/lesson_delete/:lessonId" component={LessonDelete} />
      <Route exact path="/2/lesson_update/:lessonId" component={LessonUpdate} />

      <Route exact path="/2/questions" component={QuestionList} />
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
      <Route exact path="/2/student_add" component={StudentAdd} />
      <Route
        exact
        path="/2/student_delete/:studentId"
        component={StudentDelete}
      />
      <Route
        exact
        path="/2/student_update/:studentId"
        component={StudentUpdate}
      />

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

      <Route exact path="/2/teachers" component={TeacherList} />
      <Route exact path="/2/teacher/:teacherId" component={TeacherDetail} />
      <Route exact path="/2/teacher_add" component={TeacherAdd} />
      <Route
        exact
        path="/2/teacher_delete/:teacherId"
        component={TeacherDelete}
      />
      <Route
        exact
        path="/2/teacher_update/:teacherId"
        component={TeacherUpdate}
      />

      <Route exact path="/2/users" component={UserList} />
      <Route exact path="/2/user/:userId" component={UserDetail} />
      <Route exact path="/2/user_add" component={UserAdd} />
      <Route exact path="/2/user_delete/:userId" component={UserDelete} />
      <Route exact path="/2/user_update/:userId" component={UserUpdate} />

      <Route exact path="/2/userRoles" component={UserRoleList} />
      <Route exact path="/2/userRole/:roleId" component={UserRoleDetail} />
      <Route exact path="/2/userRole_add" component={UserRoleAdd} />
      <Route
        exact
        path="/2/userRole_delete/:roleId"
        component={UserRoleDelete}
      />
      <Route
        exact
        path="/2/userRole_update/:roleId"
        component={UserRoleUpdate}
      />
    </div>
  );
}
