import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
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
            <Table.HeaderCell>Exam Id</Table.HeaderCell>
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Öğretmen Adı</Table.HeaderCell>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Aktiflik</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Silme</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exams.map((exam) => (
            <Table.Row key={exam.examId}>
              <Table.Cell>
                <Link to={`/1/exam/${exam?.examId}`}>{exam?.examId}</Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/1/lesson/${exam?.lesson?.lessonId}`}>
                  {exam?.lesson?.lessonName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/1/teacher/${exam?.lesson?.teacher?.teacherId}`}>
                  {exam?.lesson?.teacher?.user?.userFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  to={`/1/department/${exam?.lesson?.department?.departmentId}`}
                >
                  {exam?.lesson?.department?.departmentName}
                </Link>
              </Table.Cell>
              <Table.Cell>{`${exam?.active}`}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/1/exam_update/" + exam.examId}>
                  Güncelleme
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/1/exam_delete/" + exam.examId}>
                  Silme
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Button as={NavLink} to={"/1/exam_add/"}>
        Exam Ekleme
      </Button>
    </div>
  );
}
