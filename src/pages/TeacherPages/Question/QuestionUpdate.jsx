import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
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
  let examId = question?.exam?.examId;
  const [questionText, setQuestionText] = useState(null);
  const [optionA, setOptionA] = useState(null);
  const [optionB, setOptionB] = useState(null);
  const [optionC, setOptionC] = useState(null);
  const [optionD, setOptionD] = useState(null);
  const [optionE, setOptionE] = useState(null);
  const [trueOption, setTrueOption] = useState(null);

  return (
    <div>
      QUESTION UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Question Text</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="questionText"
                    placeholder="Question Text"
                    value={questionText ?? question.questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Option A</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="optionA"
                    placeholder="Option A"
                    value={optionA ?? question.optionA}
                    onChange={(e) => setOptionA(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Option B</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="optionB"
                    placeholder="Option B"
                    value={optionB ?? question.optionB}
                    onChange={(e) => setOptionB(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Option C</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="optionC"
                    placeholder="Option C"
                    value={optionC ?? question.optionC}
                    onChange={(e) => setOptionC(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Option D</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="optionD"
                    placeholder="Option D"
                    value={optionD ?? question.optionD}
                    onChange={(e) => setOptionD(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Option E</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="optionE"
                    placeholder="Option E"
                    value={optionE ?? question.optionE}
                    onChange={(e) => setOptionE(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>True Option</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="trueOption"
                    placeholder="True Option"
                    value={trueOption ?? question.trueOption}
                    onChange={(e) => setTrueOption(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Question Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() => {
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
                  });
                }}
                disabled={
                  !(
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
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
