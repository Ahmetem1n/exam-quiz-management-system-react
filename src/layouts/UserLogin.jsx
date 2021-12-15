import { Formik } from "formik";
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import { Button, Form } from "semantic-ui-react";
import AdminService from "../services/adminService";
import StudentService from "../services/studentService";
import TeacherService from "../services/teacherService";
import UserService from "../services/userService";
import ExamQuizTextInput from "../utilities/ExamQuizTextInput";

export default function UserLogin() {
  let userService = new UserService();
  let adminService = new AdminService();
  let teacherService = new TeacherService();
  let studentService = new StudentService();
  let cookie = new Cookies();

  const [nationalityId, setNationalityId] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const initialValues = {
    nationalityId: "",
    userPassword: "",
  };

  return (
    <div>
      USER LOGIN
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="nationalityId"
            placeholder="Nationality Id"
            value={nationalityId ?? ""}
            onChange={(e) => setNationalityId(e.target.value)}
          />

          <ExamQuizTextInput
            name="userPassword"
            placeholder="User Password"
            value={userPassword ?? ""}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              userService
                .loginUser({ nationalityId, userPassword })
                .then((result) => {
                  if (result.data === "") {
                    alert("Wrong User Or Wrong Password");
                  } else {
                    if (result.data.userRole.roleId === 1) {
                      adminService
                        .getByUserId(result.data.userId)
                        .then((result2) => {
                          cookie.set("adminId", result2.data.adminId);
                        });
                    } else if (result.data.userRole.roleId === 2) {
                      teacherService
                        .getByUserId(result.data.userId)
                        .then((result2) => {
                          cookie.set("teacherId", result2.data.teacherId);
                        });
                    } else if (result.data.userRole.roleId === 3) {
                      studentService
                        .getByUserId(result.data.userId)
                        .then((result2) => {
                          cookie.set("studentId", result2.data.studentId);
                        });
                    }
                    cookie.set("userId", result.data.userId);
                    cookie.set("firstname", result.data.userFirstname);
                    cookie.set("profilePhoto", result.data.userPhoto);
                    cookie.set("roleId", result.data.userRole.roleId);
                    
                    window.location.reload();
                  }
                })
            }
          >
            User Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
