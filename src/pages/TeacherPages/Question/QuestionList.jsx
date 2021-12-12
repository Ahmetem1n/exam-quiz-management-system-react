import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";

export default function QuestionList() {
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
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Soru Metni</Table.HeaderCell>
            <Table.HeaderCell>Şıklar</Table.HeaderCell>
            <Table.HeaderCell>Doğru Şık</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questions.map((question) => (
            <Table.Row key={question.questionId}>
              <Table.Cell>{question?.exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>{question?.questionText}</Table.Cell>
              <Table.Cell>{question?.questionOptionsText}</Table.Cell>
              <Table.Cell>{question?.trueOption}</Table.Cell>
              <Button as={NavLink} to={"/2/question_update/" + question.questionId}>
                Güncelleme
              </Button>
              <Button as={NavLink} to={"/2/question_delete/" + question.questionId}>
                Silme
              </Button>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
