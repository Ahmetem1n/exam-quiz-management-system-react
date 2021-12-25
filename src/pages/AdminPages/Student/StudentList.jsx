import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
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
            <Table.HeaderCell>Student Id</Table.HeaderCell>
            <Table.HeaderCell>User Id</Table.HeaderCell>
            <Table.HeaderCell>Student Firstname</Table.HeaderCell>
            <Table.HeaderCell>Student Lastname</Table.HeaderCell>
            <Table.HeaderCell>Student Email</Table.HeaderCell>
            <Table.HeaderCell>Student Gender</Table.HeaderCell>
            <Table.HeaderCell>Department Name</Table.HeaderCell>
            <Table.HeaderCell>Student Grade</Table.HeaderCell>
            <Table.HeaderCell>Student Number</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {students.map((student) => (
            <Table.Row key={student.studentId}>
              <Table.Cell>{student?.studentId}</Table.Cell>
              <Table.Cell>
                <Link to={`/user/${student?.user?.userId}`}>
                  {student?.user?.userId}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/student/${student?.studentId}`}>
                  {student?.user?.userFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>{student?.user?.userLastname}</Table.Cell>
              <Table.Cell>{student?.user?.userEmail}</Table.Cell>
              <Table.Cell>{student?.user?.userGender}</Table.Cell>
              <Table.Cell>
                <Link to={`/department/${student?.department?.departmentId}`}>
                  {student?.department?.departmentName}
                </Link>
              </Table.Cell>
              <Table.Cell>{student?.studentGrade}</Table.Cell>
              <Table.Cell>{student?.studentNumber}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/student_update/" + student.studentId}
                >
                  Update
                </Button>
              </Table.Cell>

              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/student_delete/" + student.studentId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/student_add"}>
        Student Add
      </Button>
    </div>
  );
}
