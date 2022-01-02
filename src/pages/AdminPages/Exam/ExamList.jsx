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
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Teacher Name</Table.HeaderCell>
            <Table.HeaderCell>Department Name</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Questions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exams.map((exam) => (
            <Table.Row key={exam?.examId}>
              <Table.Cell>
                <Link to={`/exam/${exam?.examId}`}>{exam?.examId}</Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/lesson/${exam?.lesson?.lessonId}`}>
                  {exam?.lesson?.lessonName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/teacher/${exam?.lesson?.teacher?.teacherId}`}>
                  {exam?.lesson?.teacher?.user?.userFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link
                  to={`/department/${exam?.lesson?.department?.departmentId}`}
                >
                  {exam?.lesson?.department?.departmentName}
                </Link>
              </Table.Cell>
              <Table.Cell>{`${exam?.active}`}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exam_update/" + exam?.examId}>
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exam_delete/" + exam?.examId}>
                  Delete
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/questions/" + exam?.examId}>
                  Questions
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Button as={NavLink} to={"/exam_add"}>
        Exam Add
      </Button>
    </div>
  );
}
