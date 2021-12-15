import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionDelete() {
  let { questionId } = useParams();
  let questionService = new QuestionService();

  return (
    <div>
      QUESTİON DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="questionId" value={questionId} />

          <Button
            color="green"
            type="submit"
            onClick={() => questionService.deleteQuestion(questionId)}
          >
            Question Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
