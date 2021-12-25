import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import StudentService from "../../../services/studentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function StudentAdd() {
  const [userId, setUserId] = useState(null);
  const [studentNumber, setStudentNumber] = useState(null);
  const [studentGrade, setStudentGrade] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);

  let studentService = new StudentService();

  return (
    <div>
      STUDENT ADD
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
              <strong>Student Number</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="studentNumber"
                    placeholder="Student Number"
                    value={studentNumber ?? ""}
                    onChange={(e) => setStudentNumber(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Student Grade</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="studentGrade"
                    placeholder="Student Grade"
                    value={studentGrade ?? ""}
                    onChange={(e) => setStudentGrade(e.target.value)}
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
              <strong>Student Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  studentService.addStudent({
                    userId,
                    studentNumber,
                    studentGrade,
                    departmentId,
                  })
                }
                disabled={
                  !(userId && studentNumber && studentGrade && departmentId)
                }
              >
                Student Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
