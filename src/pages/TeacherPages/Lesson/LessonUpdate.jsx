import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonUpdate() {
  let cookie = new Cookies();

  let { lessonId } = useParams();

  const [lesson, setLesson] = useState({});
  let lessonService = new LessonService();
  useEffect(() => {
    lessonService
      .getByLessonId(lessonId)
      .then((result) => setLesson(result.data));
  }, []);
  let teacherId = cookie.get("teacherId");
  let departmentId = lesson?.department?.departmentId;
  let lessonName = lesson?.lessonName;
  const [lessonTeamsCode, setLessonTeamsCode] = useState(null);
  const [lessonMaterialLink, setLessonMaterialLink] = useState(null);

  const initialValues = {};
  return (
    <div>
      LESSON UPDATE
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
              <strong>Teacher Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="teacherId" value={teacherId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Department Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="departmentId" value={departmentId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Lesson Name</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="lessonName" value={lessonName} />
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
                    value={lessonTeamsCode ?? lesson.lessonTeamsCode}
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
                    value={lessonMaterialLink ?? lesson?.lessonMaterialLink}
                    onChange={(e) => setLessonMaterialLink(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Lesson Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  lessonService.updateLesson({
                    lessonId,
                    teacherId,
                    departmentId,
                    lessonName,
                    lessonTeamsCode,
                    lessonMaterialLink,
                  })
                }
                disabled={!(lessonTeamsCode && lessonMaterialLink)}
              >
                Lesson Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
