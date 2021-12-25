import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function FacultyAdd() {
  const [facultyName, setFacultyName] = useState(null);

  let facultyService = new FacultyService();

  return (
    <div>
      FACULTY ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Faculty Name</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="facultyName"
                    placeholder="Faculty Name"
                    value={facultyName ?? ""}
                    onChange={(e) => setFacultyName(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Faculty Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  facultyService.addFaculty({
                    facultyName,
                  })
                }
                disabled={!facultyName}
              >
                Faculty Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
