import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
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
            <Table.HeaderCell>Teacher Id</Table.HeaderCell>
            <Table.HeaderCell>Teacher Firstname</Table.HeaderCell>
            <Table.HeaderCell>Teacher Lastname</Table.HeaderCell>
            <Table.HeaderCell>Teacher Email</Table.HeaderCell>
            <Table.HeaderCell>Teacher Gender</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {teachers.map((teacher) => (
            <Table.Row key={teacher.teacherId}>
              <Table.Cell>{teacher?.teacherId}</Table.Cell>
              <Table.Cell>
                <Link to={`/teacher/${teacher?.teacherId}`}>
                  {teacher?.user?.userFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>{teacher?.user?.userLastname}</Table.Cell>
              <Table.Cell>{teacher?.user?.userEmail}</Table.Cell>
              <Table.Cell>{teacher?.user?.userGender}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/teacher_update/" + teacher.teacherId}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/teacher_delete/" + teacher.teacherId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/teacher_add"}>
        Teacher Add
      </Button>
    </div>
  );
}
