import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    let questionsService = new QuestionService();
    questionsService.getQuestions().then((result) => setQuestions(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Question Id</Table.HeaderCell>
            <Table.HeaderCell>Exam Id</Table.HeaderCell>
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
              <Table.Cell>
                <Link to={`/question/${question?.questionId}`}>
                  {question?.questionId}
                </Link>
              </Table.Cell>
              <Table.Cell>
              <Link to={`/exam/${question?.exam?.examId}`}>
              {question?.exam?.examId}
                </Link></Table.Cell>
              <Table.Cell>
                <Link to={`/lesson/${question?.exam?.lesson?.lessonId}`}>
                  {question?.exam?.lesson?.lessonName}
                </Link>
              </Table.Cell>
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
