import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";

export default function ExamResultList() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let examResultService = new ExamResultService();
    examResultService.getResults().then((result) => setResults(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Result Id</Table.HeaderCell>
            <Table.HeaderCell>Exam Id</Table.HeaderCell>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Student Name</Table.HeaderCell>
            <Table.HeaderCell>Result</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {results.map((result) => (
            <Table.Row key={result?.resultId}>
              <Table.Cell>
                <Link to={`/examResult/${result?.resultId}`}>
                  {result?.resultId}
                </Link>
              </Table.Cell>

              <Table.Cell>
                <Link to={`/exam/${result?.exam?.examId}`}>
                  {result?.exam?.examId}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/lesson/${result?.exam?.lesson?.lessonId}`}>
                  {result?.exam?.lesson?.lessonName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <Link to={`/student/${result?.student?.studentId}`}>
                  {result?.student?.user?.userFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>{result?.result}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/examResult_update/" + result?.resultId}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/examResult_delete/" + result?.resultId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/examResult_add"}>
        Exam Result Add
      </Button>
    </div>
  );
}
