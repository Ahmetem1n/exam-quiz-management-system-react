import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionStudentDelete() {
  let { detailId } = useParams();
  let questionStudentService = new QuestionStudentService();
  const initialValues = {};
  return (
    <div>
      QUESTİON-STUDENT DELETE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Detail Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="detailId" value={detailId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Question Student Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  questionStudentService.deleteQuestionStudent(detailId)
                }
              >
                Question Student Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
