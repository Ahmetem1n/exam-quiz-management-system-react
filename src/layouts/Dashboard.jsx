import React from "react";
import { Route } from "react-router";
import { Grid } from "semantic-ui-react";
import AdminAdd from "../pages/Admins/AdminAdd";
import AdminDelete from "../pages/Admins/AdminDelete";
import AdminDetail from "../pages/Admins/AdminDetail";
import AdminList from "../pages/Admins/AdminList";
import AdminUpdate from "../pages/Admins/AdminUpdate";
import DepartmentAdd from "../pages/Department/DepartmentAdd";
import DepartmentDelete from "../pages/Department/DepartmentDelete";
import DepartmentDetail from "../pages/Department/DepartmentDetail";
import DepartmentList from "../pages/Department/DepartmentList";
import DepartmentUpdate from "../pages/Department/DepartmentUpdate";
import ExamAdd from "../pages/Exam/ExamAdd";
import ExamDelete from "../pages/Exam/ExamDelete";
import ExamDetail from "../pages/Exam/ExamDetail";
import ExamList from "../pages/Exam/ExamList";
import ExamUpdate from "../pages/Exam/ExamUpdate";
import FacultyAdd from "../pages/Faculty/FacultyAdd";
import FacultyDelete from "../pages/Faculty/FacultyDelete";
import FacultyDetail from "../pages/Faculty/FacultyDetail";
import FacultyList from "../pages/Faculty/FacultyList";
import FacultyUpdate from "../pages/Faculty/FacultyUpdate";
import LessonAdd from "../pages/Lesson/LessonAdd";
import LessonDelete from "../pages/Lesson/LessonDelete";
import LessonDetail from "../pages/Lesson/LessonDetail";
import LessonList from "../pages/Lesson/LessonList";
import LessonUpdate from "../pages/Lesson/LessonUpdate";
import QuestionAdd from "../pages/Question/QuestionAdd";
import QuestionDelete from "../pages/Question/QuestionDelete";
import QuestionDetail from "../pages/Question/QuestionDetail";
import QuestionList from "../pages/Question/QuestionList";
import QuestionUpdate from "../pages/Question/QuestionUpdate";
import QuestionStudentAdd from "../pages/QuestionStudent/QuestionStudentAdd";
import QuestionStudentDelete from "../pages/QuestionStudent/QuestionStudentDelete";
import QuestionStudentDetail from "../pages/QuestionStudent/QuestionStudentDetail";
import QuestionStudentList from "../pages/QuestionStudent/QuestionStudentList";
import QuestionStudentUpdate from "../pages/QuestionStudent/QuestionStudentUpdate";
import StudentAdd from "../pages/Student/StudentAdd";
import StudentDelete from "../pages/Student/StudentDelete";
import StudentDetail from "../pages/Student/StudentDetail";
import StudentList from "../pages/Student/StudentList";
import StudentUpdate from "../pages/Student/StudentUpdate";
import RelationshipAdd from "../pages/StudentLessonRelationship/RelationshipAdd";
import RelationshipDelete from "../pages/StudentLessonRelationship/RelationshipDelete";
import RelationshipDetail from "../pages/StudentLessonRelationship/RelationshipDetail";
import RelationshipList from "../pages/StudentLessonRelationship/RelationshipList";
import RelationshipUpdate from "../pages/StudentLessonRelationship/RelationshipUpdate";
import TeacherAdd from "../pages/Teacher/TeacherAdd";
import TeacherDelete from "../pages/Teacher/TeacherDelete";
import TeacherDetail from "../pages/Teacher/TeacherDetail";
import TeacherList from "../pages/Teacher/TeacherList";
import TeacherUpdate from "../pages/Teacher/TeacherUpdate";
import UserAdd from "../pages/User/UserAdd";
import UserDelete from "../pages/User/UserDelete";
import UserDetail from "../pages/User/UserDetail";
import UserList from "../pages/User/UserList";
import UserLogin from "../pages/User/UserLogin";
import UserUpdate from "../pages/User/UserUpdate";
import UserRoleAdd from "../pages/UserRole/UserRoleAdd";
import UserRoleDelete from "../pages/UserRole/UserRoleDelete";
import UserRoleDetail from "../pages/UserRole/UserRoleDetail";
import UserRoleList from "../pages/UserRole/UserRoleList";
import UserRoleUpdate from "../pages/UserRole/UserRoleUpdate";
import Menus from "./Menus";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Menus />
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Route exact path="/" component={UserLogin} />
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
          <Route exact path="/exam/:examId" component={ExamDetail} />
          <Route exact path="/exam_add" component={ExamAdd} />
          <Route exact path="/exam_delete/:examId" component={ExamDelete} />
          <Route exact path="/exam_update/:examId" component={ExamUpdate} />

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
          <Route
            exact
            path="/lesson_delete/:lessonId"
            component={LessonDelete}
          />
          <Route
            exact
            path="/lesson_update/:lessonId"
            component={LessonUpdate}
          />

          <Route exact path="/questions" component={QuestionList} />
          <Route
            exact
            path="/question/:questionId"
            component={QuestionDetail}
          />
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

          <Route
            exact
            path="/questionStudents"
            component={QuestionStudentList}
          />
          <Route
            exact
            path="/questionStudent/:detailId"
            component={QuestionStudentDetail}
          />
          <Route
            exact
            path="/questionStudent_add"
            component={QuestionStudentAdd}
          />
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
          <Route
            exact
            path="/userRole_delete/:roleId"
            component={UserRoleDelete}
          />
          <Route
            exact
            path="/userRole_update/:roleId"
            component={UserRoleUpdate}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
