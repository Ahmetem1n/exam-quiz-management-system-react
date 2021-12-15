import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";

export default function ExamListLessonId() {
  let { lessonId } = useParams();
  const [exams, setExams] = useState([]);

  useEffect(() => {
    let examService = new ExamService();
    examService.getByActive(lessonId).then((result) => setExams(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Start Exam</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exams.map((exam) => (
            <Table.Row key={exam.examId}>
              <Table.Cell>{exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exam_page/" + exam.examId}>
                  Start Exam
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
