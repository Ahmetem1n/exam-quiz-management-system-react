import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";
export default function FacultyList() {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    let facultyService = new FacultyService();
    facultyService.getFaculties().then((result) => setFaculties(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Faculty Id</Table.HeaderCell>
            <Table.HeaderCell>Faculty Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {faculties.map((faculty) => (
            <Table.Row key={faculty.facultyId}>
              <Table.Cell>
                <Link to={`/faculty/${faculty?.facultyId}`}>
                  {faculty?.facultyId}
                </Link>
              </Table.Cell>
              <Table.Cell>{faculty?.facultyName}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/faculty_update/" + faculty?.facultyId}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/faculty_delete/" + faculty?.facultyId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/faculty_add/"}>
        Faculty Add
      </Button>
    </div>
  );
}
