import React, { Component, useEffect, useState } from "react";
import { Form, Table } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";

export default function ExamPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let questionsService = new QuestionService();
    questionsService.getQuestions().then((result) => setQuestions(result.data));
  }, []);
  let i = 1;
  const { value } = {};
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
                  <h2>
                    {i++}) {question?.questionText}
                  </h2>
                </Table.Row>
                <Table.Row>
                  <strong>{question?.questionOptionsText}</strong>
                </Table.Row>

                <Table.Row>
                  <Form.Radio label="A" value="sm" checked={value === "sm"} />
                  <Form.Radio label="B" value="md" checked={value === "md"} />
                  <Form.Radio label="C" value="lg" checked={value === "lg"} />
                  <Form.Radio label="D" value="lg" checked={value === "lg"} />
                  <Form.Radio label="E" value="lg" checked={value === "lg"} />
                </Table.Row>
              </Table>
              <Table></Table>
            </Table.Body>
          ))}
        </Table.Body>
      </Table>

      <Form>
        <Form.Group inline>
          {questions.map((question) => (
            <Table.Row key={question.questionId}>
              <Form.Radio label="A" value="sm" checked={value === "sm"} />
              <Form.Radio label="B" value="md" checked={value === "md"} />
              <Form.Radio label="C" value="lg" checked={value === "lg"} />
              <Form.Radio label="D" value="lg" checked={value === "lg"} />
              <Form.Radio label="E" value="lg" checked={value === "lg"} />
            </Table.Row>
          ))}
          <label>Size</label>
        </Form.Group>

        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}
