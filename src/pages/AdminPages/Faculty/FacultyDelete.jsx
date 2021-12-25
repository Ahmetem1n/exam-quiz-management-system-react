import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function FacultyDelete() {
  let { facultyId } = useParams();
  let facultyService = new FacultyService();
  const initialValues = {};
  return (
    <div>
      FACULTY DELETE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Faculty Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="facultyId" value={facultyId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Faculty Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() => facultyService.deleteFaculty(facultyId)}
              >
                Faculty Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
