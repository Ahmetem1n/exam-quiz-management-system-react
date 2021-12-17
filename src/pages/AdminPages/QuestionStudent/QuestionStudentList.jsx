import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            <Table.HeaderCell>Marked Option</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questionStudents.map((questionStudent) => (
            <Table.Row key={questionStudent.detailId}>
              <Table.Cell>
                <Link to={`/questionStudent/${questionStudent?.detailId}`}>
                  {questionStudent?.detailId}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/question/${questionStudent?.question?.questionId}`}>
                  {questionStudent?.question?.questionId}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/student/${questionStudent?.student?.studentId}`}>
                  {questionStudent?.student?.studentId}
                </Link>
              </Table.Cell>
              <Table.Cell>{questionStudent?.markedOption}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/questionStudent_update/" + questionStudent.detailId}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/questionStudent_delete/" + questionStudent.detailId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/questionStudent_add"}>
        Question-Student Add
      </Button>
    </div>
  );
}
