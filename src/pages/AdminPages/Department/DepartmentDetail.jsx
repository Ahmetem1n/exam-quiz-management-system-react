import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";

export default function DepartmentDetail() {
  let { departmentId } = useParams();

  const [department, setDepartment] = useState({});
  useEffect(() => {
    let departmentService = new DepartmentService();
    departmentService
      .getByDepartmentId(departmentId)
      .then((result) => setDepartment(result.data));
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
                <Table.Cell>{department?.departmentId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{department?.departmentName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{department?.faculty?.facultyId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{department?.faculty?.facultyName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
