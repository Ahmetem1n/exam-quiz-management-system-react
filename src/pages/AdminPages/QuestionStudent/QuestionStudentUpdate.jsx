import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionStudentAdd() {
  let { detailId } = useParams();
  const [questionStudent, setQuestionStudent] = useState({});
  let questionStudentService = new QuestionStudentService();
  useEffect(() => {
    questionStudentService
      .getByDetailId(detailId)
      .then((result) => setQuestionStudent(result.data));
  }, []);
  const [questionId, setQuestionId] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [markedOption, setMarkedOption] = useState(null);

  const initialValues = {};
  return (
    <div>
      QUESTİON-STUDENT UPDATE
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
              <strong>Question Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="questionId"
                    placeholder="Question Id"
                    value={questionId ?? questionStudent?.question?.questionId}
                    onChange={(e) => setQuestionId(e.target.value)}
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
                    value={studentId ?? questionStudent?.student?.studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Marked Option</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="markedOption"
                    placeholder="Marked Option"
                    value={markedOption ?? questionStudent?.markedOption}
                    onChange={(e) => setMarkedOption(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Question-Student Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  questionStudentService.updateQuestionStudent({
                    detailId,
                    questionId,
                    studentId,
                    markedOption,
                  })
                }
                disabled={!(questionId && studentId && markedOption)}
              >
                Question-Student Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
