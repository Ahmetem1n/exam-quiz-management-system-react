import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionStudentAdd() {
  const [questionId, setQuestionId] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [markedOption, setMarkedOption] = useState(null);

  let questionStudentService = new QuestionStudentService();

  return (
    <div>
      QUESTİON-STUDENT ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Question Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="questionId"
                    placeholder="Question Id"
                    value={questionId ?? ""}
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
                    value={studentId ?? ""}
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
                    value={markedOption ?? ""}
                    onChange={(e) => setMarkedOption(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Question-Student Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  questionStudentService.addQuestionStudent({
                    questionId,
                    studentId,
                    markedOption,
                  })
                }
                disabled={!(questionId && studentId && markedOption)}
              >
                Question-Student Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
