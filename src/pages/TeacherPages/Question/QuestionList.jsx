import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
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
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Soru Metni</Table.HeaderCell>
            <Table.HeaderCell>Şıklar</Table.HeaderCell>
            <Table.HeaderCell>Doğru Şık</Table.HeaderCell>
            <Table.HeaderCell>Seçilen Şık</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questions.map((question) => (
            <Table.Row key={question.questionId}>
              <Table.Cell>{question?.exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>{question?.questionText}</Table.Cell>
              <Table.Cell>{question?.questionOptionsText}</Table.Cell>
              <Table.Cell>{question?.trueOption}</Table.Cell>
              <Table.Cell>{question?.markedOption}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
