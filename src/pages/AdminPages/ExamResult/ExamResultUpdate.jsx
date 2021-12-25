import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form, Table } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamResultUpdate() {
  let { resultId } = useParams();
  const [examResult, setExamResult] = useState({});
  const [result, setResult] = useState(null);

  let examResultService = new ExamResultService();
  useEffect(() => {
    examResultService
      .getByResultId(resultId)
      .then((result) => setExamResult(result.data));
  }, []);
  let examId = examResult?.exam?.examId;
  let studentId = examResult?.student?.studentId;
  const initialValues = {};
  return (
    <div>
      EXAM RESULT UPDATE
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
              <strong>Exam Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="examId" value={examId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Student Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="studentId" value={studentId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Result</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="result"
                    placeholder="Result"
                    value={result ?? examResult?.result}
                    onChange={(e) => setResult(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Exam Result Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  examResultService.updateResult({
                    resultId,
                    examId,
                    studentId,
                    result,
                  })
                }
                disabled={!result}
              >
                Exam Result Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
