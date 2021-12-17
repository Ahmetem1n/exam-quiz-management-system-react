import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";

export default function LessonList() {
  let cookie = new Cookies();
  const [lessons, setLessons] = useState([]);
  let lessonService = new LessonService();
  useEffect(() => {
    lessonService
      .getByTeacherId(cookie.get("teacherId"))
      .then((result) => setLessons(result.data));
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
            <Table.HeaderCell>Exams</Table.HeaderCell>
            <Table.HeaderCell>Students Taking</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lessons.map((lesson) => (
            <Table.Row key={lesson.lessonId}>
              <Table.Cell>{lesson?.lessonId}</Table.Cell>
              <Table.Cell>{lesson?.lessonName}</Table.Cell>
              <Table.Cell>{lesson?.department?.departmentName}</Table.Cell>
              <Table.Cell>{lesson?.teacher?.user?.userFirstname}</Table.Cell>
              <Table.Cell>{lesson?.lessonTeamsCode}</Table.Cell>
              <Table.Cell>{lesson?.lessonMaterialLink}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/lesson_update/" + lesson.lessonId}>
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exams/" + lesson.lessonId}>
                  Exams
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/studentLesson/" + lesson.lessonId}>
                  Students Taking
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
