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
            <Table.HeaderCell>Fakülte Id</Table.HeaderCell>
            <Table.HeaderCell>Fakülte Adı</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Silme</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {faculties.map((faculty) => (
            <Table.Row key={faculty.facultyId}>
              <Table.Cell>
                <Link to={`/1/faculty/${faculty?.facultyId}`}>
                  {faculty?.facultyId}
                </Link>
              </Table.Cell>
              <Table.Cell>{faculty?.facultyName}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/faculty_update/" + faculty?.facultyId}
                >
                  Güncelleme
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/faculty_delete/" + faculty?.facultyId}
                >
                  Silme
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/1/faculty_add/"}>
        Faculty Ekleme
      </Button>
    </div>
  );
}
