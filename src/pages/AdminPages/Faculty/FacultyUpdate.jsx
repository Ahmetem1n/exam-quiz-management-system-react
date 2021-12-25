import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function FacultyUpdate() {
  let { facultyId } = useParams();
  const [faculty, setFaculty] = useState({});
  let facultyService = new FacultyService();

  useEffect(() => {
    facultyService
      .getByFacultyId(facultyId)
      .then((result) => setFaculty(result.data));
  }, []);

  const [facultyName, setFacultyName] = useState(null);

  const initialValues = {};
  return (
    <div>
      FACULTY UPDATE
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
              <strong>Faculty Name</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="facultyName"
                    placeholder="Faculty Name"
                    value={facultyName ?? faculty.facultyName}
                    onChange={(e) => setFacultyName(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Faculty Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  facultyService.updateFaculty({
                    facultyId,
                    facultyName,
                  })
                }
                disabled={!facultyName}
              >
                Faculty Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
