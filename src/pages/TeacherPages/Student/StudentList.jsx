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
            <Table.HeaderCell>Student Firstname</Table.HeaderCell>
            <Table.HeaderCell>Student Lastname</Table.HeaderCell>
            <Table.HeaderCell>Student Email</Table.HeaderCell>
            <Table.HeaderCell>Student Gender</Table.HeaderCell>
            <Table.HeaderCell>Lesson Relationship</Table.HeaderCell>
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
