import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import UserService from "../../services/userService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function UserUpdate() {
  let { userId } = useParams();
  const [user, setUser] = useState({});
  let userService = new UserService();
  useEffect(() => {
    userService.getByUserId(userId).then((result) => setUser(result.data));
  }, []);
  const [roleId, setRoleId] = useState(null);
  const [userFirstname, setUserFirstname] = useState(null);
  const [userLastname, setUserLastname] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [nationalityId, setNationalityId] = useState(null);
  const [userGender, setUserGender] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const initialValues = {
    userId: "",
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
      USER GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId}
          />
          <ExamQuizTextInput
            name="roleId"
            placeholder="Role Id"
            value={roleId ?? user.roleId}
            onChange={(e) => setRoleId(e.target.value)}
          />

          <ExamQuizTextInput
            name="userFirstname"
            placeholder="User Firstname"
            value={userFirstname ?? user.userFirstname}
            onChange={(e) => setUserFirstname(e.target.value)}
          />
          <ExamQuizTextInput
            name="userLastname"
            placeholder="User Lastname"
            value={userLastname ?? user.userLastname}
            onChange={(e) => setUserLastname(e.target.value)}
          />
          <ExamQuizTextInput
            name="userEmail"
            placeholder="User Email"
            value={userEmail ?? user.userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <ExamQuizTextInput
            name="nationalityId"
            placeholder="Nationality Id"
            value={nationalityId ?? user.nationalityId}
            onChange={(e) => setNationalityId(e.target.value)}
          />
          <ExamQuizTextInput
            name="userGender"
            placeholder="User Gender"
            value={userGender ?? user.userGender}
            onChange={(e) => setUserGender(e.target.value)}
          />
          <ExamQuizTextInput
            name="userPhoto"
            placeholder="User Photo"
            value={userPhoto ?? user.userPhoto}
            onChange={(e) => setUserPhoto(e.target.value)}
          />
          <ExamQuizTextInput
            name="userPassword"
            placeholder="User Password"
            value={userPassword ?? user.userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              userService.updateUser({
                userId,
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
            User Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
