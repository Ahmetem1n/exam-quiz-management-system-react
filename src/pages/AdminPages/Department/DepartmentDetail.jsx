import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";

export default function DepartmentDetail() {
  let { departmentId } = useParams();

  const [departments, setDepartments] = useState({});
  useEffect(() => {
    let departmentService = new DepartmentService();
    departmentService
      .getByDepartmentId(departmentId)
      .then((result) => setDepartments(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Department Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Department Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
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
                <Table.Cell>{departmentId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{departments?.departmentName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{departments?.faculty?.facultyId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{departments?.faculty?.facultyName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
