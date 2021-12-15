import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";

export default function ExamListTeacher() {
  let { lessonId } = useParams();
  let cookie = new Cookies();
  let examService = new ExamService();
  const [exams, setExams] = useState([]);
  useEffect(() => {
    examService
      .getExamsByTeacher(cookie.get("teacherId"))
      .then((result) => setExams(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lesson Id</Table.HeaderCell>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Questions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exams.map((exam) => (
            <Table.Row key={exam.examId}>
              <Table.Cell>{exam?.lesson?.lessonId}</Table.Cell>
              <Table.Cell>{exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>{`${exam?.active}`}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exam_update/" + exam.examId}>
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exam_delete/" + exam.examId}>
                  Delete
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/questions/" + exam.examId}>
                  Questions
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/exam_add/"}>
        Exam Add
      </Button>
    </div>
  );
}
