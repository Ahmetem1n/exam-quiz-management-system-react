import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Öğretmen Adı</Table.HeaderCell>
            <Table.HeaderCell>Ders Teams Kodu</Table.HeaderCell>
            <Table.HeaderCell>Ders Materyal Linki</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Silme</Table.HeaderCell>
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
                <Button as={NavLink} to={"/1/lesson_update/" + lesson.lessonId}>
                  Güncelleme
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/1/lesson_delete/" + lesson.lessonId}>
                  Silme
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/1/lesson_add/"}>
        Lesson Ekleme
      </Button>
    </div>
  );
}
