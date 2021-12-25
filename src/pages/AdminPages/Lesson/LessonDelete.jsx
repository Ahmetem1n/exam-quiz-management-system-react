import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonDelete() {
  let { lessonId } = useParams();
  let lessonService = new LessonService();
  const initialValues = {};
  return (
    <div>
      LESSON DELETE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Lesson Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="lessonId" value={lessonId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Lesson Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() => lessonService.deleteLesson(lessonId)}
              >
                Lesson Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
