import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";

export default function ExamList() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    let examService = new ExamService();
    examService.getExams().then((result) => setExams(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Aktiflik</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exams.map((exam) => (
            <Table.Row key={exam.examId}>
              <Table.Cell>{exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>{`${exam?.active}`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
