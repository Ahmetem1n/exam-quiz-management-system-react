import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
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

  const initialValues = {
    teacherId: "",
    departmentId: "",
    lessonName: "",
    lessonTeamsCode: "",
    lessonMaterialLink: "",
  };
  return (
    <div>
      LESSON UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="lessonId" value={lessonId} />
          <ExamQuizTextInput
            name="teacherId"
            placeholder="Teacher Id"
            value={teacherId ?? lesson?.teacher?.teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
          />

          <ExamQuizTextInput
            name="departmentId"
            placeholder="Department Id"
            value={departmentId ?? lesson?.department?.departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
          />
          <ExamQuizTextInput
            name="lessonName"
            placeholder="Lesson Name"
            value={lessonName ?? lesson?.lessonName}
            onChange={(e) => setLessonName(e.target.value)}
          />
          <ExamQuizTextInput
            name="lessonTeamsCode"
            placeholder="Lesson Teams Code"
            value={lessonTeamsCode ?? lesson?.lessonTeamsCode}
            onChange={(e) => setLessonTeamsCode(e.target.value)}
          />
          <ExamQuizTextInput
            name="lessonMaterialLink"
            placeholder="Lesson Material Link"
            value={lessonMaterialLink ?? lesson?.lessonMaterialLink}
            onChange={(e) => setLessonMaterialLink(e.target.value)}
          />

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
        </Form>
      </Formik>
    </div>
  );
}
