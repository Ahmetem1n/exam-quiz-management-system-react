import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function RelationshipAdd() {
  const [lessonId, setLessonId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  let relationshipService = new StudentLessonRelationshipService();

  return (
    <div>
      STUDENT-LESSON RELATIONSHIP ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Lesson Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="lessonId"
                    placeholder="Lesson Id"
                    value={lessonId ?? ""}
                    onChange={(e) => setLessonId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Student Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="studentId"
                    placeholder="Student Id"
                    value={studentId ?? ""}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Student-Lesson Relationship Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  relationshipService.addRelationship({
                    lessonId,
                    studentId,
                  })
                }
                disabled={!(lessonId && studentId)}
              >
                Student-Lesson Relationship Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
