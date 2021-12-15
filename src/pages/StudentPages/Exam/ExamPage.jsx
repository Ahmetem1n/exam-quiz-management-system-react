import { Formik } from "formik";
import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Form, Table } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";

export default function ExamPage() {
  let { examId } = useParams();
  const [questions, setQuestions] = useState([]);

  const [question, setQuestion] = useState("");

  useEffect(() => {
    let questionsService = new QuestionService();
    questionsService
      .getByExamId(examId)
      .then((result) => setQuestions(result.data));
  }, []);

  let i = 1;
  
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row></Table.Row>
        </Table.Header>

        <Table.Body>
          {questions.map((question) => (
            <Table.Body key={question.questionId}>
              <Table>
                <Table.Row>
                  <h3>
                    {i++}) {question?.questionText}
                  </h3>
                </Table.Row>

                <Table.Row>
                  <Form.Group>
                    <Form.Radio
                      label={"A) " + question?.optionA}
                      name={question.questionId}
                      value='a'
                      checked={ question.questionId !== 'a'}
                      onChange={(e) => setQuestion("A" + question.questionId)}
                    />
                    <Form.Radio
                      label={"B) " + question?.optionB}
                      name={question.questionId}
                      value='b'
                      checked={question.questionId !== 'b'}
                      onChange={(e) => setQuestion("B" + question.questionId)}
                    />
                    <Form.Radio
                      label={"C) " + question?.optionC}
                      name={question.questionId}
                      value='c'
                      checked={ question.questionId !== 'c'}
                      onChange={(e) => setQuestion("C" + question.questionId)}
                    />
                    <Form.Radio
                      label={"D) " + question?.optionD}
                      name={question.questionId}
                      value='d'
                      checked={ question.questionId !== 'd'}
                      onChange={(e) => setQuestion("D" + question.questionId)}
                    />
                    <Form.Radio
                      label={"E) " + question?.optionE}
                      name={question.questionId}
                      value='e'
                      checked={ question.questionId !== 'e'}
                      onChange={(e) => setQuestion("E" + question.questionId)}
                    />
                  </Form.Group>
                </Table.Row>
              </Table>
              <Table></Table>
            </Table.Body>
          ))}
        </Table.Body>
        <Form.Button>{console.log(question)}Submit</Form.Button>
      </Table>
    </div>
  );
}
