import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import StudentService from "../../../services/studentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function StudentUpdate() {
  let { studentId } = useParams();
  const [student, setStudent] = useState({});
  let studentService = new StudentService();
  useEffect(() => {
    studentService
      .getByStudentId(studentId)
      .then((result) => setStudent(result.data));
  }, []);
  const [studentNumber, setStudentNumber] = useState(null);
  const [studentGrade, setStudentGrade] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  let userId = student?.user?.userId;
  const initialValues = {};
  return (
    <div>
      STUDENT UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Student Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="studentId" value={studentId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="userId" value={userId} />
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
                    value={studentNumber ?? student?.studentNumber}
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
                    value={studentGrade ?? student?.studentGrade}
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
                    value={departmentId ?? student?.department?.departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Student Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  studentService.updateStudent({
                    studentId,
                    userId,
                    studentNumber,
                    studentGrade,
                    departmentId,
                  })
                }
                disabled={!(studentNumber && studentGrade && departmentId)}
              >
                Student Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
