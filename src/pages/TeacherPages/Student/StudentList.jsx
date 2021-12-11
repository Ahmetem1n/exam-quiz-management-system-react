import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import StudentService from "../../../services/studentService";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let studentService = new StudentService();
    studentService.getStudents().then((result) => setStudents(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Öğrenci Adı</Table.HeaderCell>
            <Table.HeaderCell>Öğrenci Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Öğrenci Email</Table.HeaderCell>
            <Table.HeaderCell>Öğrenci Cinsiyet</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {students.map((student) => (
            <Table.Row key={student.studentId}>
              <Table.Cell>{student?.user?.userFirstname}</Table.Cell>
              <Table.Cell>{student?.user?.userLastname}</Table.Cell>
              <Table.Cell>{student?.user?.userEmail}</Table.Cell>
              <Table.Cell>{student?.user?.userGender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
