import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamUpdate() {
  let { examId } = useParams();
  const [exam, setExam] = useState({});

  let examService = new ExamService();
  useEffect(() => {
    examService.getByExamId(examId).then((result) => setExam(result.data));
  }, []);

  const [lessonId, setLessonId] = useState(null);
  const [active, setActive] = useState(null);

  const initialValues = {};
  return (
    <div>
      EXAM UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Exam Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="examId" value={examId} />
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
                    value={lessonId ?? exam?.lesson?.lessonId}
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
                    value={active ?? exam?.active}
                    onChange={(e) => setActive(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Exam Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  examService.updateExam({
                    examId,
                    lessonId,
                    active,
                  })
                }
                disabled={!(lessonId && active)}
              >
                Exam Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
