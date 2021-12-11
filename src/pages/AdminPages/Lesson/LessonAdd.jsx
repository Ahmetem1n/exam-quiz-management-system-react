import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonAdd() {
  const [teacherId, setTeacherId] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [lessonName, setLessonName] = useState(null);
  const [lessonTeamsCode, setLessonTeamsCode] = useState(null);
  const [lessonMaterialLink, setLessonMaterialLink] = useState(null);

  let lessonService = new LessonService();

  const initialValues = {
    teacherId: "",
    departmentId: "",
    lessonName: "",
    lessonTeamsCode: "",
    lessonMaterialLink: "",
  };
  return (
    <div>
      DERS EKLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="teacherId"
            placeholder="Teacher Id"
            value={teacherId ?? ""}
            onChange={(e) => setTeacherId(e.target.value)}
          />

          <ExamQuizTextInput
            name="departmentId"
            placeholder="Department Id"
            value={departmentId ?? ""}
            onChange={(e) => setDepartmentId(e.target.value)}
          />
          <ExamQuizTextInput
            name="lessonName"
            placeholder="Lesson Name"
            value={lessonName ?? ""}
            onChange={(e) => setLessonName(e.target.value)}
          />
          <ExamQuizTextInput
            name="lessonTeamsCode"
            placeholder="Lesson Teams Code"
            value={lessonTeamsCode ?? ""}
            onChange={(e) => setLessonTeamsCode(e.target.value)}
          />
          <ExamQuizTextInput
            name="lessonMaterialLink"
            placeholder="Lesson Material Link"
            value={lessonMaterialLink ?? ""}
            onChange={(e) => setLessonMaterialLink(e.target.value)}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

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
        </Form>
      </Formik>
    </div>
  );
}
