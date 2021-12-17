import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Table } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";

export default function ExamResultList() {
  const [examResults, setExamResults] = useState([]);
  let cookie = new Cookies();
  let examResultService = new ExamResultService();

  useEffect(() => {
    examResultService
      .getByStudentId(cookie.get("studentId"))
      .then((result) => setExamResults(result.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Result</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {examResults.map((examResult) => (
            <Table.Row key={examResult?.resultId}>
              <Table.Cell>{examResult?.exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>{examResult?.result}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
