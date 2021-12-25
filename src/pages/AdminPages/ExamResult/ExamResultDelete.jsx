import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form, Table } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamResultDelete() {
  let { resultId } = useParams();
  let examResultService = new ExamResultService();
  const initialValues = {};
  return (
    <div>
      EXAM RESULT DELETE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Result Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="resultId" value={resultId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Exam Result Delete</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() => examResultService.deleteResult(resultId)}
              >
                Exam Result Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
