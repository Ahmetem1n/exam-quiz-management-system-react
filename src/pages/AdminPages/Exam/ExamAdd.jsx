import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamAdd() {
  const [lessonId, setLessonId] = useState(null);
  const [active, setActive] = useState(null);

  let examService = new ExamService();

  const initialValues = {
    lessonId: "",
    active: "",
  };
  return (
    <div>
      EXAM EKLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="lessonId"
            placeholder="Lesson Id"
            value={lessonId ?? ""}
            onChange={(e) => setLessonId(e.target.value)}
          />

          <ExamQuizTextInput
            name="active"
            placeholder="Active"
            value={active ?? ""}
            onChange={(e) => setActive(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

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
        </Form>
      </Formik>
    </div>
  );
}
