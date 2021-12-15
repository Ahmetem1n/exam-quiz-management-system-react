import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
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
  const [optionA, setOptionA] = useState(null);
  const [optionB, setOptionB] = useState(null);
  const [optionC, setOptionC] = useState(null);
  const [optionD, setOptionD] = useState(null);
  const [optionE, setOptionE] = useState(null);
  const [trueOption, setTrueOption] = useState(null);

  const initialValues = {
    examId: "",
    questionText: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    optionE: "",
    trueOption: "",
  };
  return (
    <div>
      QUESTİON UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="questionId" value={questionId} />
          <ExamQuizTextInput
            name="examId"
            placeholder="Exam Id"
            value={examId ?? question?.exam?.examId}
            onChange={(e) => setExamId(e.target.value)}
          />

          <ExamQuizTextInput
            name="questionText"
            placeholder="Question Text"
            value={questionText ?? question.questionText}
            onChange={(e) => setQuestionText(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionA"
            placeholder="Option A"
            value={optionA ?? question.optionA}
            onChange={(e) => setOptionA(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionB"
            placeholder="Option B"
            value={optionB ?? question.optionB}
            onChange={(e) => setOptionB(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionC"
            placeholder="Option C"
            value={optionC ?? question.optionC}
            onChange={(e) => setOptionC(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionD"
            placeholder="Option D"
            value={optionD ?? question.optionD}
            onChange={(e) => setOptionD(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionE"
            placeholder="Option E"
            value={optionE ?? question.optionE}
            onChange={(e) => setOptionE(e.target.value)}
          />
          <ExamQuizTextInput
            name="trueOption"
            placeholder="True Option"
            value={trueOption ?? question.trueOption}
            onChange={(e) => setTrueOption(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionService.updateQuestion({
                questionId,
                examId,
                questionText,
                optionA,
                optionB,
                optionC,
                optionD,
                optionE,
                trueOption,
              })
            }
            disabled={
              !(
                examId &&
                questionText &&
                optionA &&
                optionB &&
                optionC &&
                optionD &&
                optionE &&
                trueOption
              )
            }
          >
            Question Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
