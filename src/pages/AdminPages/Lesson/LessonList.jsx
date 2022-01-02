import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";

export default function LessonList() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    let lessonService = new LessonService();
    lessonService.getLessons().then((result) => setLessons(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lesson Id</Table.HeaderCell>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Department Name</Table.HeaderCell>
            <Table.HeaderCell>Teacher Name</Table.HeaderCell>
            <Table.HeaderCell>Lesson Teams Code</Table.HeaderCell>
            <Table.HeaderCell>Lesson Material Link</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Exams</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lessons.map((lesson) => (
            <Table.Row key={lesson?.lessonId}>
              <Table.Cell>{lesson?.lessonId}</Table.Cell>
              <Table.Cell>
                <Link to={`/lesson/${lesson?.lessonId}`}>
                  {lesson?.lessonName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/department/${lesson?.department?.departmentId}`}>
                  {lesson?.department?.departmentName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/teacher/${lesson?.teacher?.teacherId}`}>
                  {lesson?.teacher?.user?.userFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>{lesson?.lessonTeamsCode}</Table.Cell>
              <Table.Cell>{lesson?.lessonMaterialLink}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/lesson_update/" + lesson?.lessonId}>
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/lesson_delete/" + lesson?.lessonId}>
                  Delete
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exams/" + lesson?.lessonId}>
                  Exams
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/lesson_add"}>
        Lesson Add
      </Button>
    </div>
  );
}
