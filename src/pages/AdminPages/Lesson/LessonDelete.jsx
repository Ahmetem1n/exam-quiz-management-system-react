import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonDelete() {
  let { lessonId } = useParams();
  let lessonService = new LessonService();

  return (
    <div>
      DERS SİLME
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="lessonId" value={lessonId} />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => lessonService.deleteLesson(lessonId)}
          >
            Lesson Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
