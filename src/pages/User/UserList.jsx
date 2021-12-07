import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import UserService from "../../services/userService";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService.getUsers().then((result) => setUsers(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Kullanıcı Adı</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Email</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Cinsiyet</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Tc</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Fotoğraf</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Şifre</Table.HeaderCell>
            <Table.HeaderCell>Kullanıcı Rolü</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.userId}>
              <Table.Cell>{user?.userFirstname}</Table.Cell>
              <Table.Cell>{user?.userLastname}</Table.Cell>
              <Table.Cell>{user?.userEmail}</Table.Cell>
              <Table.Cell>{user?.userGender}</Table.Cell>
              <Table.Cell>{user?.nationalityId}</Table.Cell>
              <Table.Cell>{user?.userPhoto}</Table.Cell>
              <Table.Cell>{user?.userPassword}</Table.Cell>
              <Table.Cell>{user?.userRole?.roleName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
