import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Grid, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamAdd() {
  const [lessonId, setLessonId] = useState(null);
  const [active, setActive] = useState(null);

  let examService = new ExamService();

  return (
    <div>
      EXAM ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Lesson Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik >
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
              <strong>Active</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="active"
                    placeholder="Active"
                    value={active ?? ""}
                    onChange={(e) => setActive(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Exam Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  examService.addExam({
                    lessonId,
                    active,
                  })
                }
                disabled={!(lessonId && active)}
              >
                Exam Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
