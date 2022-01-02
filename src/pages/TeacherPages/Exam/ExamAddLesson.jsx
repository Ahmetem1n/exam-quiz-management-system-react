import { Formik } from "formik";
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { Button, Dropdown, Form, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamAddLesson() {
  let { lessonId } = useParams();

  const [active, setActive] = useState(null);
  let examService = new ExamService();
  let lessonService = new LessonService();
  let cookie = new Cookies();

  const initialValues = {};
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
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="lessonId" value={lessonId} />
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
                  lessonService.getByLessonId(lessonId).then((result) => {
                    if (
                      result.data !== "" &&
                      result.data.teacher.teacherId.toString() ===
                        cookie.get("teacherId")
                    ) {
                      examService.addExam({
                        lessonId,
                        active,
                      });
                    } else {
                      alert(
                        "Ders Id'si Yanlış!!!\nLütfen kendi derslerinizden birini giriniz."
                      );
                    }
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
