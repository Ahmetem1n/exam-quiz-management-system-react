import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
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

  return (
    <div>
      USER ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Role Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="roleId"
                    placeholder="Role Id"
                    value={roleId ?? ""}
                    onChange={(e) => setRoleId(e.target.value)}
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
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userFirstname"
                    placeholder="User Firstname"
                    value={userFirstname ?? ""}
                    onChange={(e) => setUserFirstname(e.target.value)}
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
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userLastname"
                    placeholder="User Lastname"
                    value={userLastname ?? ""}
                    onChange={(e) => setUserLastname(e.target.value)}
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
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userEmail"
                    placeholder="User Email"
                    value={userEmail ?? ""}
                    onChange={(e) => setUserEmail(e.target.value)}
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
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="nationalityId"
                    placeholder="Nationality Id"
                    value={nationalityId ?? ""}
                    onChange={(e) => setNationalityId(e.target.value)}
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
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userGender"
                    placeholder="User Gender"
                    value={userGender ?? ""}
                    onChange={(e) => setUserGender(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Photo</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userPhoto"
                    placeholder="User Photo"
                    value={userPhoto ?? ""}
                    onChange={(e) => setUserPhoto(e.target.value)}
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
                    value={userPassword ?? ""}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Add</strong>
            </Table.Cell>
            <Table.Cell>
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
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
