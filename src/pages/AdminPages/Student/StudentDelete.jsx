import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import StudentService from "../../../services/studentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function StudentDelete() {
  let { studentId } = useParams();
  let studentService = new StudentService();
  const initialValues = {};
  return (
    <div>
      STUDENT DELETE
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
              <strong>Student Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() => studentService.deleteStudent(studentId)}
              >
                Student Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
