import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    let teacherService = new TeacherService();
    teacherService.getTeachers().then((result) => setTeachers(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Teacher Firstname</Table.HeaderCell>
            <Table.HeaderCell>Teacher Lastname</Table.HeaderCell>
            <Table.HeaderCell>Teacher Email</Table.HeaderCell>
            <Table.HeaderCell>Teacher Gender</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {teachers.map((teacher) => (
            <Table.Row key={teacher.teacherId}>
              <Table.Cell>{teacher?.user?.userFirstname}</Table.Cell>
              <Table.Cell>{teacher?.user?.userLastname}</Table.Cell>
              <Table.Cell>{teacher?.user?.userEmail}</Table.Cell>
              <Table.Cell>{teacher?.user?.userGender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
