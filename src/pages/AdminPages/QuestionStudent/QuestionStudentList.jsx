import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
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
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Silme</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questionStudents.map((questionStudent) => (
            <Table.Row key={questionStudent.detailId}>
              <Table.Cell>{questionStudent?.detailId}</Table.Cell>
              <Table.Cell>{questionStudent?.question?.questionId}</Table.Cell>
              <Table.Cell>{questionStudent?.student?.studentId}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/questionStudent_update/" + questionStudent.detailId}
                >
                  Güncelleme
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/questionStudent_delete/" + questionStudent.detailId}
                >
                  Silme
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/1/questionStudent_add"}>
        Question-Student Ekleme
      </Button>
    </div>
  );
}
