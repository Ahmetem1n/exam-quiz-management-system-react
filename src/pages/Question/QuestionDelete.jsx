import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import QuestionService from "../../services/questionService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function QuestionDelete() {
  let { questionId } = useParams();
  let questionService = new QuestionService();

  const initialValues = {
    questionId: "",
  };
  return (
    <div>
      QUESTİON SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="questionId"
            placeholder="Question Id"
            value={questionId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => questionService.deleteQuestion(questionId)}
            disabled={!questionId}
          >
            Question Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
