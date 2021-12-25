import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function TeacherAdd() {
  const [userId, setUserId] = useState(null);
  const [profession, setProfession] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);

  let teacherService = new TeacherService();

  return (
    <div>
      TEACHER ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>User Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userId"
                    placeholder="User Id"
                    value={userId ?? ""}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Profession</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="profession"
                    placeholder="Profession"
                    value={profession ?? ""}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Department Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="departmentId"
                    placeholder="Department Id"
                    value={departmentId ?? ""}
                    onChange={(e) => setDepartmentId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Teacher Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  teacherService.addTeacher({
                    userId,
                    profession,
                    departmentId,
                  })
                }
                disabled={!(userId && profession && departmentId)}
              >
                Teacher Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
