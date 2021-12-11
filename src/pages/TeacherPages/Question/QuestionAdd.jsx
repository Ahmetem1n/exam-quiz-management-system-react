import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionAdd() {
  const [examId, setExamId] = useState(null);
  const [questionText, setQuestionText] = useState(null);
  const [questionOptionsText, setQuestionOptionsText] = useState(null);
  const [trueOption, setTrueOption] = useState(null);

  let questionService = new QuestionService();

  const initialValues = {
    examId: "",
    questionText: "",
    questionOptionsText: "",
    trueOption: "",
  };
  return (
    <div>
      QUESTİON EKLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="examId"
            placeholder="Exam Id"
            value={examId ?? ""}
            onChange={(e) => setExamId(e.target.value)}
          />

          <ExamQuizTextInput
            name="questionText"
            placeholder="Question Text"
            value={questionText ?? ""}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <ExamQuizTextInput
            name="questionOptionsText"
            placeholder="Question Options Text"
            value={questionOptionsText ?? ""}
            onChange={(e) => setQuestionOptionsText(e.target.value)}
          />
          <ExamQuizTextInput
            name="trueOption"
            placeholder="True Option"
            value={trueOption ?? ""}
            onChange={(e) => setTrueOption(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionService.addQuestion({
                examId,
                questionText,
                questionOptionsText,
                trueOption,
              })
            }
            disabled={
              !(examId && questionText && questionOptionsText && trueOption)
            }
          >
            Question Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
