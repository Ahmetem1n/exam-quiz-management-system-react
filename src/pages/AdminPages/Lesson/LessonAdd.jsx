import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonAdd() {
  const [teacherId, setTeacherId] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [lessonName, setLessonName] = useState(null);
  const [lessonTeamsCode, setLessonTeamsCode] = useState(null);
  const [lessonMaterialLink, setLessonMaterialLink] = useState(null);

  let lessonService = new LessonService();

  return (
    <div>
      LESSON ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Teacher Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="teacherId"
                    placeholder="Teacher Id"
                    value={teacherId ?? ""}
                    onChange={(e) => setTeacherId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Department Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="departmentId"
                    placeholder="Department Id"
                    value={departmentId ?? ""}
                    onChange={(e) => setDepartmentId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Lesson Name</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="lessonName"
                    placeholder="Lesson Name"
                    value={lessonName ?? ""}
                    onChange={(e) => setLessonName(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Lesson Teams Code</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="lessonTeamsCode"
                    placeholder="Lesson Teams Code"
                    value={lessonTeamsCode ?? ""}
                    onChange={(e) => setLessonTeamsCode(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Lesson Material Link</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="lessonMaterialLink"
                    placeholder="Lesson Material Link"
                    value={lessonMaterialLink ?? ""}
                    onChange={(e) => setLessonMaterialLink(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Lesson Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  lessonService.addLesson({
                    teacherId,
                    departmentId,
                    lessonName,
                    lessonTeamsCode,
                    lessonMaterialLink,
                  })
                }
                disabled={
                  !(
                    teacherId &&
                    departmentId &&
                    lessonName &&
                    lessonTeamsCode &&
                    lessonMaterialLink
                  )
                }
              >
                Lesson Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
