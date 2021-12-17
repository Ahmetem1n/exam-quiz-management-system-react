import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";

export default function QuestionListByExamId() {
  let { examId } = useParams();
  const [questions, setQuestions] = useState([]);
  let questionService = new QuestionService();
  useEffect(() => {
    questionService
      .getByExamId(examId)
      .then((result) => setQuestions(result.data));
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Question Id</Table.HeaderCell>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Question Text</Table.HeaderCell>
            <Table.HeaderCell>Option A</Table.HeaderCell>
            <Table.HeaderCell>Option B</Table.HeaderCell>
            <Table.HeaderCell>Option C</Table.HeaderCell>
            <Table.HeaderCell>Option D</Table.HeaderCell>
            <Table.HeaderCell>Option E</Table.HeaderCell>
            <Table.HeaderCell>True Option</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questions.map((question) => (
            <Table.Row key={question.questionId}>
              <Table.Cell>{question?.questionId}</Table.Cell>
              <Table.Cell>{question?.exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>{question?.questionText}</Table.Cell>
              <Table.Cell>{question?.optionA}</Table.Cell>
              <Table.Cell>{question?.optionB}</Table.Cell>
              <Table.Cell>{question?.optionC}</Table.Cell>
              <Table.Cell>{question?.optionD}</Table.Cell>
              <Table.Cell>{question?.optionE}</Table.Cell>
              <Table.Cell>{question?.trueOption}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/question_update/" + question.questionId}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/question_delete/" + question.questionId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/question_add"}>
        Question Add
      </Button>
    </div>
  );
}
