import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";

export default function FacultyDetail() {
  let { facultyId } = useParams();
  const [faculties, setFaculties] = useState({});
  useEffect(() => {
    let facultyService = new FacultyService();
    facultyService
      .getByFacultyId(facultyId)
      .then((result) => setFaculties(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Faculty Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Faculty Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{faculties?.facultyId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{faculties?.facultyName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
