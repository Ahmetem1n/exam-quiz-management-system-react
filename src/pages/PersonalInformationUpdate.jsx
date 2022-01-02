import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Button, Form, Table } from "semantic-ui-react";
import UserService from "../services/userService";
import ExamQuizTextInput from "../utilities/ExamQuizTextInput";

export default function PersonalInformationUpdate() {
  const [user, setUser] = useState({});
  let cookie = new Cookies();
  let userService = new UserService();
  useEffect(() => {
    userService
      .getByUserId(cookie.get("userId"))
      .then((result) => setUser(result.data));
  }, []);
  const [userPassword, setUserPassword] = useState(null);

  let userId = cookie.get("userId");
  let roleId = user?.userRole?.roleId;
  let userFirstname = user?.userFirstname;
  let userLastname = user?.userLastname;
  let userEmail = user?.userEmail;
  let nationalityId = user?.nationalityId;
  let userGender = user?.userGender;
  let userPhoto = user?.userPhoto;

  const initialValues = {};
  return (
    <div>
      PASSWORD UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>User Role</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput
                    disabled
                    name="userRole"
                    value={user?.userRole?.roleName}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Firstname</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput
                    disabled
                    name="userFirstname"
                    value={userFirstname}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Lastname</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput
                    disabled
                    name="userLastname"
                    value={userLastname}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Email</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput
                    disabled
                    name="userEmail"
                    value={userEmail}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Nationality Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput
                    disabled
                    name="nationalityId"
                    value={nationalityId}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Gender</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput
                    disabled
                    name="userGender"
                    value={userGender}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>User Password</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userPassword"
                    placeholder="User Password"
                    value={userPassword ?? user?.userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Password Update</strong>
            </Table.Cell>
            <Table.Cell>
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
                disabled={!userPassword}
              >
                Password Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
