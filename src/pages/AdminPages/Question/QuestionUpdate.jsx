import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionUpdate() {
  let { questionId } = useParams();
  const [question, setQuestion] = useState({});
  let questionService = new QuestionService();
  useEffect(() => {
    questionService
      .getByQuestionId(questionId)
      .then((result) => setQuestion(result.data));
  }, []);
  const [examId, setExamId] = useState(null);
  const [questionText, setQuestionText] = useState(null);
  const [questionOptionsText, setQuestionOptionsText] = useState(null);
  const [trueOption, setTrueOption] = useState(null);

  const initialValues = {
    questionId: "",
    examId: "",
    questionText: "",
    questionOptionsText: "",
    trueOption: "",
  };
  return (
    <div>
      QUESTİON GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="questionId"
            placeholder="Question Id"
            value={questionId}
          />
          <ExamQuizTextInput
            name="examId"
            placeholder="Exam Id"
            value={examId ?? question.examId}
            onChange={(e) => setExamId(e.target.value)}
          />

          <ExamQuizTextInput
            name="questionText"
            placeholder="Question Text"
            value={questionText ?? question.questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <ExamQuizTextInput
            name="questionOptionsText"
            placeholder="Question Options Text"
            value={questionOptionsText ?? question.questionOptionsText}
            onChange={(e) => setQuestionOptionsText(e.target.value)}
          />
          <ExamQuizTextInput
            name="trueOption"
            placeholder="True Option"
            value={trueOption ?? question.trueOption}
            onChange={(e) => setTrueOption(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionService.updateQuestion({
                questionId,
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
            Question Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
