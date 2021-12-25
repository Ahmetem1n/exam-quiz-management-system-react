import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonUpdate() {
  let { lessonId } = useParams();
  const [lesson, setLesson] = useState({});
  let lessonService = new LessonService();
  useEffect(() => {
    lessonService
      .getByLessonId(lessonId)
      .then((result) => setLesson(result.data));
  }, []);
  const [teacherId, setTeacherId] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [lessonName, setLessonName] = useState(null);
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
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="teacherId"
                    placeholder="Teacher Id"
                    value={teacherId ?? lesson?.teacher?.teacherId}
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
                    value={departmentId ?? lesson?.department?.departmentId}
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
                    value={lessonName ?? lesson?.lessonName}
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
                    value={lessonTeamsCode ?? lesson?.lessonTeamsCode}
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
                Lesson Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
