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
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Öğretmen Adı</Table.HeaderCell>
            <Table.HeaderCell>Ders Teams Kodu</Table.HeaderCell>
            <Table.HeaderCell>Ders Materyal Linki</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Sınavlar</Table.HeaderCell>
            <Table.HeaderCell>Dersi Alan Öğrenciler</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {lessons.map((lesson) => (
            <Table.Row key={lesson.lessonId}>
              <Table.Cell>{lesson?.lessonName}</Table.Cell>
              <Table.Cell>{lesson?.department?.departmentName}</Table.Cell>
              <Table.Cell>{lesson?.teacher?.user?.userFirstname}</Table.Cell>
              <Table.Cell>{lesson?.lessonTeamsCode}</Table.Cell>
              <Table.Cell>{lesson?.lessonMaterialLink}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/2/lesson_update/" + lesson.lessonId}>
                  Güncelleme
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/2/exams/" + lesson.lessonId}>
                  Sınavlar
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/2/student/" + lesson.lessonId}>
                  Dersi Alan Öğrenciler
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
