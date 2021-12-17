import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";

export default function UserRoleDetail() {
  let { roleId } = useParams();
  const [userRole, setUserRole] = useState({});
  useEffect(() => {
    let userRoleService = new UserRoleService();
    userRoleService
      .getByRoleId(roleId)
      .then((result) => setUserRole(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Role Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Role Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{userRole?.roleId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{userRole?.roleName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
