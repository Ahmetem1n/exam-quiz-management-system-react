import React from "react";
import { Route } from "react-router";
import AdminAdd from "../pages/StudentPages/Admins/AdminAdd";
import AdminDelete from "../pages/StudentPages/Admins/AdminDelete";
import AdminDetail from "../pages/StudentPages/Admins/AdminDetail";
import AdminList from "../pages/StudentPages/Admins/AdminList";
import AdminUpdate from "../pages/StudentPages/Admins/AdminUpdate";
import DepartmentAdd from "../pages/StudentPages/Department/DepartmentAdd";
import DepartmentDelete from "../pages/StudentPages/Department/DepartmentDelete";
import DepartmentDetail from "../pages/StudentPages/Department/DepartmentDetail";
import DepartmentList from "../pages/StudentPages/Department/DepartmentList";
import DepartmentUpdate from "../pages/StudentPages/Department/DepartmentUpdate";
import ExamAdd from "../pages/StudentPages/Exam/ExamAdd";
import ExamDelete from "../pages/StudentPages/Exam/ExamDelete";
import ExamDetail from "../pages/StudentPages/Exam/ExamDetail";
import ExamList from "../pages/StudentPages/Exam/ExamList";
import ExamUpdate from "../pages/StudentPages/Exam/ExamUpdate";
import FacultyAdd from "../pages/StudentPages/Faculty/FacultyAdd";
import FacultyDelete from "../pages/StudentPages/Faculty/FacultyDelete";
import FacultyDetail from "../pages/StudentPages/Faculty/FacultyDetail";
import FacultyList from "../pages/StudentPages/Faculty/FacultyList";
import FacultyUpdate from "../pages/StudentPages/Faculty/FacultyUpdate";
import LessonAdd from "../pages/StudentPages/Lesson/LessonAdd";
import LessonDelete from "../pages/StudentPages/Lesson/LessonDelete";
import LessonDetail from "../pages/StudentPages/Lesson/LessonDetail";
import LessonList from "../pages/StudentPages/Lesson/LessonList";
import LessonUpdate from "../pages/StudentPages/Lesson/LessonUpdate";
import QuestionAdd from "../pages/StudentPages/Question/QuestionAdd";
import QuestionDelete from "../pages/StudentPages/Question/QuestionDelete";
import QuestionDetail from "../pages/StudentPages/Question/QuestionDetail";
import QuestionList from "../pages/StudentPages/Question/QuestionList";
import QuestionUpdate from "../pages/StudentPages/Question/QuestionUpdate";
import QuestionStudentAdd from "../pages/StudentPages/QuestionStudent/QuestionStudentAdd";
import QuestionStudentDelete from "../pages/StudentPages/QuestionStudent/QuestionStudentDelete";
import QuestionStudentDetail from "../pages/StudentPages/QuestionStudent/QuestionStudentDetail";
import QuestionStudentList from "../pages/StudentPages/QuestionStudent/QuestionStudentList";
import QuestionStudentUpdate from "../pages/StudentPages/QuestionStudent/QuestionStudentUpdate";
import StudentAdd from "../pages/StudentPages/Student/StudentAdd";
import StudentDelete from "../pages/StudentPages/Student/StudentDelete";
import StudentDetail from "../pages/StudentPages/Student/StudentDetail";
import StudentList from "../pages/StudentPages/Student/StudentList";
import StudentUpdate from "../pages/StudentPages/Student/StudentUpdate";
import RelationshipAdd from "../pages/StudentPages/StudentLessonRelationship/RelationshipAdd";
import RelationshipDelete from "../pages/StudentPages/StudentLessonRelationship/RelationshipDelete";
import RelationshipDetail from "../pages/StudentPages/StudentLessonRelationship/RelationshipDetail";
import RelationshipList from "../pages/StudentPages/StudentLessonRelationship/RelationshipList";
import RelationshipUpdate from "../pages/StudentPages/StudentLessonRelationship/RelationshipUpdate";
import TeacherAdd from "../pages/StudentPages/Teacher/TeacherAdd";
import TeacherDelete from "../pages/StudentPages/Teacher/TeacherDelete";
import TeacherDetail from "../pages/StudentPages/Teacher/TeacherDetail";
import TeacherList from "../pages/StudentPages/Teacher/TeacherList";
import TeacherUpdate from "../pages/StudentPages/Teacher/TeacherUpdate";
import UserAdd from "../pages/StudentPages/User/UserAdd";
import UserDelete from "../pages/StudentPages/User/UserDelete";
import UserDetail from "../pages/StudentPages/User/UserDetail";
import UserList from "../pages/StudentPages/User/UserList";
import UserLogin from "../pages/StudentPages/User/UserLogin";
import UserUpdate from "../pages/StudentPages/User/UserUpdate";
import UserRoleAdd from "../pages/StudentPages/UserRole/UserRoleAdd";
import UserRoleDelete from "../pages/StudentPages/UserRole/UserRoleDelete";
import UserRoleDetail from "../pages/StudentPages/UserRole/UserRoleDetail";
import UserRoleList from "../pages/StudentPages/UserRole/UserRoleList";
import UserRoleUpdate from "../pages/StudentPages/UserRole/UserRoleUpdate";
import StudentNavi from "./AdminNavi";

export default function StudentRoute() {
  return (
    <div>
      <StudentNavi x={3}/>
      <Route exact path="/" component={UserLogin} />
      <Route exact path="/3/admins" component={AdminList} />
      <Route exact path="/3/admin/:adminId" component={AdminDetail} />
      <Route exact path="/3/admin_add" component={AdminAdd} />
      <Route exact path="/3/admin_delete/:adminId" component={AdminDelete} />
      <Route exact path="/3/admin_update/:adminId" component={AdminUpdate} />

      <Route exact path="/3/departments" component={DepartmentList} />
      <Route
        exact
        path="/3/department/:departmentId"
        component={DepartmentDetail}
      />
      <Route exact path="/3/department_add" component={DepartmentAdd} />
      <Route
        exact
        path="/3/department_delete/:departmentId"
        component={DepartmentDelete}
      />
      <Route
        exact
        path="/3/department_update/:departmentId"
        component={DepartmentUpdate}
      />

      <Route exact path="/3/exams" component={ExamList} />
      <Route exact path="/3/exam/:examId" component={ExamDetail} />
      <Route exact path="/3/exam_add" component={ExamAdd} />
      <Route exact path="/3/exam_delete/:examId" component={ExamDelete} />
      <Route exact path="/3/exam_update/:examId" component={ExamUpdate} />

      <Route exact path="/3/faculties" component={FacultyList} />
      <Route exact path="/3/faculty/:facultyId" component={FacultyDetail} />
      <Route exact path="/3/faculty_add" component={FacultyAdd} />
      <Route
        exact
        path="/3/faculty_delete/:facultyId"
        component={FacultyDelete}
      />
      <Route
        exact
        path="/3/faculty_update/:facultyId"
        component={FacultyUpdate}
      />

      <Route exact path="/3/lessons" component={LessonList} />
      <Route exact path="/3/lesson/:lessonId" component={LessonDetail} />
      <Route exact path="/3/lesson_add" component={LessonAdd} />
      <Route exact path="/3/lesson_delete/:lessonId" component={LessonDelete} />
      <Route exact path="/3/lesson_update/:lessonId" component={LessonUpdate} />

      <Route exact path="/3/questions" component={QuestionList} />
      <Route exact path="/3/question/:questionId" component={QuestionDetail} />
      <Route exact path="/3/question_add" component={QuestionAdd} />
      <Route
        exact
        path="/3/question_delete/:questionId"
        component={QuestionDelete}
      />
      <Route
        exact
        path="/3/question_update/:questionId"
        component={QuestionUpdate}
      />

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

      <Route exact path="/3/students" component={StudentList} />
      <Route exact path="/3/student/:studentId" component={StudentDetail} />
      <Route exact path="/3/student_add" component={StudentAdd} />
      <Route
        exact
        path="/3/student_delete/:studentId"
        component={StudentDelete}
      />
      <Route
        exact
        path="/3/student_update/:studentId"
        component={StudentUpdate}
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
      <Route exact path="/3/teacher_add" component={TeacherAdd} />
      <Route
        exact
        path="/3/teacher_delete/:teacherId"
        component={TeacherDelete}
      />
      <Route
        exact
        path="/3/teacher_update/:teacherId"
        component={TeacherUpdate}
      />

      <Route exact path="/3/users" component={UserList} />
      <Route exact path="/3/user/:userId" component={UserDetail} />
      <Route exact path="/3/user_add" component={UserAdd} />
      <Route exact path="/3/user_delete/:userId" component={UserDelete} />
      <Route exact path="/3/user_update/:userId" component={UserUpdate} />

      <Route exact path="/3/userRoles" component={UserRoleList} />
      <Route exact path="/3/userRole/:roleId" component={UserRoleDetail} />
      <Route exact path="/3/userRole_add" component={UserRoleAdd} />
      <Route
        exact
        path="/3/userRole_delete/:roleId"
        component={UserRoleDelete}
      />
      <Route
        exact
        path="/3/userRole_update/:roleId"
        component={UserRoleUpdate}
      />
    </div>
  );
}
