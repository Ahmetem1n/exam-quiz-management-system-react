import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function TeacherDelete() {
  let { teacherId } = useParams();
  let teacherService = new TeacherService();
  const initialValues = {};
  return (
    <div>
      TEACHER DELETE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Teacher Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="teacherId" value={teacherId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Teacher Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() => teacherService.deleteTeacher(teacherId)}
              >
                Teacher Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
