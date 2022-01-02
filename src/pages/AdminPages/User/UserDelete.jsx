import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import UserService from "../../../services/userService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserDelete() {
  let { userId } = useParams();
  let userService = new UserService();
  const initialValues = {};
  return (
    <div>
      USER DELETE
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
              <strong>User Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() => userService.deleteUser(userId)}
              >
                User Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Formik>
        <Form className="ui form"></Form>
      </Formik>
    </div>
  );
}
