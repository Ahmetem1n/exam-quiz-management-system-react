import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function RelationshipUpdate() {
  let { relationshipId } = useParams();
  const [studentLesson, setStudentLesson] = useState({});
  let relationshipService = new StudentLessonRelationshipService();
  useEffect(() => {
    relationshipService
      .getByRelationshipId(relationshipId)
      .then((result) => setStudentLesson(result.data));
  }, []);
  const [lessonId, setLessonId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  const initialValues = {};
  return (
    <div>
      STUDENT-LESSON RELATIONSHIP UPDATE
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
              <strong>Lesson Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="lessonId"
                    placeholder="Lesson Id"
                    value={lessonId ?? studentLesson?.lesson?.lessonId}
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
                    value={studentId ?? studentLesson?.student?.studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Student-Lesson Relationship Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  relationshipService.updateRelationship({
                    relationshipId,
                    lessonId,
                    studentId,
                  })
                }
                disabled={!(lessonId && studentId)}
              >
                Student-Lesson Relationship Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
