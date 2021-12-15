import { Formik } from "formik"
import React, { useState } from "react"
import { Button, Form } from "semantic-ui-react"
import QuestionService from "../../../services/questionService"
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput"

export default function QuestionAdd() {
  const [examId, setExamId] = useState(null)
  const [questionText, setQuestionText] = useState(null)
  const [optionA, setOptionA] = useState(null)
  const [optionB, setOptionB] = useState(null)
  const [optionC, setOptionC] = useState(null)
  const [optionD, setOptionD] = useState(null)
  const [optionE, setOptionE] = useState(null)
  const [trueOption, setTrueOption] = useState(null)

  let questionService = new QuestionService()

  const initialValues = {
    examId: "",
    questionText: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    optionE: "",
    trueOption: "",
  }
  return (
    <div>
      QUESTİON ADD
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
            name="optionA"
            placeholder="OptionA"
            value={optionA ?? ""}
            onChange={(e) => setOptionA(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionB"
            placeholder="OptionB"
            value={optionB ?? ""}
            onChange={(e) => setOptionB(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionC"
            placeholder="OptionC"
            value={optionC ?? ""}
            onChange={(e) => setOptionC(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionD"
            placeholder="OptionD"
            value={optionD ?? ""}
            onChange={(e) => setOptionD(e.target.value)}
          />
          <ExamQuizTextInput
            name="optionE"
            placeholder="OptionE"
            value={optionE ?? ""}
            onChange={(e) => setOptionE(e.target.value)}
          />
          <ExamQuizTextInput
            name="trueOption"
            placeholder="True Option"
            value={trueOption ?? ""}
            onChange={(e) => setTrueOption(e.target.value)}
          />

          

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionService.addQuestion({
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
            Question Add
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
