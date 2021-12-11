import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
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
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Öğretmen Adı</Table.HeaderCell>
            <Table.HeaderCell>Ders Teams Kodu</Table.HeaderCell>
            <Table.HeaderCell>Ders Materyal Linki</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lessons.map((lesson) => (
            <Table.Row key={lesson.lessonId}>
              <Table.Cell>{lesson?.lessonName}</Table.Cell>
              <Table.Cell>{lesson?.department?.departmentName}</Table.Cell>
              <Table.Cell>{lesson?.teacherId}</Table.Cell>
              <Table.Cell>{lesson?.lessonTeamsCode}</Table.Cell>
              <Table.Cell>{lesson?.lessonMaterialLink}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
