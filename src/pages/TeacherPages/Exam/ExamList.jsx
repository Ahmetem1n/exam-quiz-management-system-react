import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";

export default function ExamList() {
  let { lessonId } = useParams();
  let examService = new ExamService();
  const [exams, setExams] = useState([]);
  useEffect(() => {
    examService.getByLessonId(lessonId).then((result) => setExams(result.data));
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
              <Button as={NavLink} to={"/2/exam_update/" + exam.examId}>
                Güncelleme
              </Button>
              <Button as={NavLink} to={"/2/exam_delete/" + exam.examId}>
                Silme
              </Button>
              <Button as={NavLink} to={"/2/questions/"+exam.examId}>
                Sorular
              </Button>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
