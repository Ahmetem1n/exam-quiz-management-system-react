import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";

export default function UserRoleList() {
  const [userRoles, setUserRoles] = useState([]);
  let userRoleService = new UserRoleService();
  useEffect(() => {
    userRoleService.getUserRoles().then((result) => setUserRoles(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rol Id</Table.HeaderCell>
            <Table.HeaderCell>Rol Adı</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Silme</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {userRoles.map((userRole) => (
            <Table.Row key={userRole.roleId}>
              <Table.Cell>{userRole?.roleId}</Table.Cell>
              <Table.Cell>{userRole?.roleName}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/userRole_update/" + userRole?.roleId}
                >
                  Güncelleme
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/userRole_delete/" + userRole?.roleId}
                >
                  Silme
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Button as={NavLink} to={"/1/userRole_add"}>
        User Role Ekleme
      </Button>
    </div>
  );
}
