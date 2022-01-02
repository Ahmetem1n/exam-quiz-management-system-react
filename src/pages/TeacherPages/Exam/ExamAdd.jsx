import { Formik } from "formik";
import React, { useState } from "react";
import { Cookies } from "react-cookie";
import { Button, Dropdown, Form, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamAdd() {
  const [lessonId, setLessonId] = useState(null);
  const [active, setActive] = useState(null);
  let examService = new ExamService();
  let lessonService = new LessonService();
  let cookie = new Cookies();
  const activeOption = [
    { key: true, text: "True", value: "true" },
    { key: false, text: "False", value: "false" },
  ];

  const { value } = "";

  let handleChangeActive = (x) => {
    setActive(x);
    console.log(active);
  };

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
              <Formik>
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
