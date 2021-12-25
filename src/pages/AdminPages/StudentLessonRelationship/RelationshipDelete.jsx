import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function RealtionshipDelete() {
  let { relationshipId } = useParams();
  let relationshipService = new StudentLessonRelationshipService();
  const initialValues = {};
  return (
    <div>
      STUDENT-LESSON RELATIONSHIP DELETE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Relationship Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="relationshipId"
                    value={relationshipId}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Relationship Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  relationshipService.deleteRelationship(relationshipId)
                }
              >
                Relationship Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
