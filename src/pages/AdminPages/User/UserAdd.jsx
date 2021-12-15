import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form,  } from "semantic-ui-react";
import UserService from "../../../services/userService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserAdd() {
  const [roleId, setRoleId] = useState(null);
  const [userFirstname, setUserFirstname] = useState(null);
  const [userLastname, setUserLastname] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [nationalityId, setNationalityId] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  let userService = new UserService();

  const initialValues = {
    roleId: "",
    userFirstname: "",
    userLastname: "",
    userEmail: "",
    nationalityId: "",
    userGender: "",
    userPhoto: "",
    userPassword: "",
  };
  return (
    <div>
      USER ADD
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="roleId"
            placeholder="Role Id"
            value={roleId ?? ""}
            onChange={(e) => setRoleId(e.target.value)}
          />

          <ExamQuizTextInput
            name="userFirstname"
            placeholder="User Firstname"
            value={userFirstname ?? ""}
            onChange={(e) => setUserFirstname(e.target.value)}
          />
          <ExamQuizTextInput
            name="userLastname"
            placeholder="User Lastname"
            value={userLastname ?? ""}
            onChange={(e) => setUserLastname(e.target.value)}
          />
          <ExamQuizTextInput
            name="userEmail"
            placeholder="User Email"
            value={userEmail ?? ""}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <ExamQuizTextInput
            name="nationalityId"
            placeholder="Nationality Id"
            value={nationalityId ?? ""}
            onChange={(e) => setNationalityId(e.target.value)}
          />
          <ExamQuizTextInput
            name="userGender"
            placeholder="User Gender"
            value={userGender ?? ""}
            onChange={(e) => setUserGender(e.target.value)}
          />
          <ExamQuizTextInput
            name="userPhoto"
            placeholder="User Photo"
            value={userPhoto ?? ""}
            onChange={(e) => setUserPhoto(e.target.value)}
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
              userService.addUser({
                roleId,
                userFirstname,
                userLastname,
                userEmail,
                nationalityId,
                userGender,
                userPhoto,
                userPassword,
              })
            }
            disabled={
              !(
                roleId &&
                userFirstname &&
                userLastname &&
                userEmail &&
                nationalityId &&
                userGender &&
                userPhoto &&
                userPassword
              )
            }
          >
            User Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
