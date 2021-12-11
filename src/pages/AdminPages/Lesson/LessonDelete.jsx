import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonDelete() {
  let { lessonId } = useParams();
  let lessonService = new LessonService();

  const initialValues = {
    lessonId: "",
  };
  return (
    <div>
      DERS SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="lessonId"
            placeholder="Lesson Id"
            value={lessonId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => lessonService.deleteLesson(lessonId)}
            disabled={!lessonId}
          >
            Lesson Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
