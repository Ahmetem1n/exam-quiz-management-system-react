import { Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button, Form, Table } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionAdd(props) {
  let { examId } = useParams();
  const [questionText, setQuestionText] = useState(null);
  const [optionA, setOptionA] = useState(null);
  const [optionB, setOptionB] = useState(null);
  const [optionC, setOptionC] = useState(null);
  const [optionD, setOptionD] = useState(null);
  const [optionE, setOptionE] = useState(null);
  const [trueOption, setTrueOption] = useState(null);

  let questionService = new QuestionService();
  const initialValues = {};
  return (
    <div>
      QUESTİON ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Exam Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="examId" value={examId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Question Text</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="questionText"
                    placeholder="Question Text"
                    value={questionText ?? ""}
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
                    value={optionA ?? ""}
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
                    value={optionB ?? ""}
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
                    value={optionC ?? ""}
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
                    value={optionD ?? ""}
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
                    value={optionE ?? ""}
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
                    value={trueOption ?? ""}
                    onChange={(e) => setTrueOption(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Question Add</strong>
            </Table.Cell>
            <Table.Cell>
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
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
