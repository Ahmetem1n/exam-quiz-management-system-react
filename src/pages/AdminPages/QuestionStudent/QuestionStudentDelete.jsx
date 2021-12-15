import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionStudentDelete() {
  let { detailId } = useParams();
  let questionStudentService = new QuestionStudentService();

  return (
    <div>
      QUESTİON-STUDENT DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="detailId" value={detailId} />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionStudentService.deleteQuestionStudent(detailId)
            }
          >
            Question Student Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
