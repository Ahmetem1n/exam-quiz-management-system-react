import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import UserService from "../../../services/userService";

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
            <Table.HeaderCell>User Id</Table.HeaderCell>
            <Table.HeaderCell>User Firstname</Table.HeaderCell>
            <Table.HeaderCell>User Lastname</Table.HeaderCell>
            <Table.HeaderCell>User Email</Table.HeaderCell>
            <Table.HeaderCell>User Gender</Table.HeaderCell>
            <Table.HeaderCell>User Nationality Id</Table.HeaderCell>
            <Table.HeaderCell>User Photo</Table.HeaderCell>
            <Table.HeaderCell>User Password</Table.HeaderCell>
            <Table.HeaderCell>User Role</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.userId}>
              <Table.Cell>{user?.userId}</Table.Cell>
              <Table.Cell>{user?.userFirstname}</Table.Cell>
              <Table.Cell>{user?.userLastname}</Table.Cell>
              <Table.Cell>{user?.userEmail}</Table.Cell>
              <Table.Cell>{user?.userGender}</Table.Cell>
              <Table.Cell>{user?.nationalityId}</Table.Cell>
              <Table.Cell>{user?.userPhoto}</Table.Cell>
              <Table.Cell>{user?.userPassword}</Table.Cell>
              <Table.Cell>{user?.userRole?.roleName}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/user_update/" + user.userId}>
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/user_delete/" + user.userId}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/user_add"}>
        User Add
      </Button>
    </div>
  );
}
