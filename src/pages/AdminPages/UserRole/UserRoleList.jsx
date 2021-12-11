import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";

export default function UserRoleList() {
  const [userRoles, setUserRoles] = useState([]);

  useEffect(() => {
    let userRoleService = new UserRoleService();
    userRoleService.getUserRoles().then((result) => setUserRoles(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rol Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {userRoles.map((userRole) => (
            <Table.Row key={userRole.userRoleId}>
              <Table.Cell>{userRole?.roleName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
