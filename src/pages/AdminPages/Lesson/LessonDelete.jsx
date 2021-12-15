import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function LessonDelete() {
  let { lessonId } = useParams();
  let lessonService = new LessonService();

  return (
    <div>
      LESSON DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="lessonId" value={lessonId} />

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
