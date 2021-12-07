import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import FacultyService from "../../services/facultyService";
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
            <Table.HeaderCell>Fakülte Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {faculties.map((faculty) => (
            <Table.Row key={faculty.facultyId}>
              <Table.Cell>{faculty?.facultyName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
