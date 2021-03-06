import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import UserService from "../../../services/userService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

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

  const initialValues = {};
  return (
    <div>
      USER UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>User Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="userId" value={userId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Role Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="roleId"
                    placeholder="Role Id"
                    value={roleId ?? user?.userRole?.roleId}
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
                    value={userFirstname ?? user?.userFirstname}
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
                    value={userLastname ?? user?.userLastname}
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
                    value={userEmail ?? user?.userEmail}
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
                    value={nationalityId ?? user?.nationalityId}
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
                    value={userGender ?? user?.userGender}
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
                    value={userPhoto ?? user?.userPhoto}
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
                    value={userPassword ?? user?.userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Update</strong>
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
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
