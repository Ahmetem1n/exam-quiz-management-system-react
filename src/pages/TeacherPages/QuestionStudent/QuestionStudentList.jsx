import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";

export default function QuestionStudentList() {
  const [questionStudents, setQuestionStudents] = useState([]);

  useEffect(() => {
    let questionStudentService = new QuestionStudentService();
    questionStudentService
      .getQuestionStudents()
      .then((result) => setQuestionStudents(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Detail Id</Table.HeaderCell>
            <Table.HeaderCell>Question Id</Table.HeaderCell>
            <Table.HeaderCell>Student Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questionStudents.map((questionStudent) => (
            <Table.Row key={questionStudent.detailId}>
              <Table.Cell>{questionStudent?.detailId}</Table.Cell>
              <Table.Cell>{questionStudent?.questionId}</Table.Cell>
              <Table.Cell>{questionStudent?.studentId}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
