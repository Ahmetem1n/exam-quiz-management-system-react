import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import AdminService from "../../services/adminService";

export default function AdminList() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    let adminService = new AdminService();
    adminService.getAdmins().then((result) => setAdmins(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Admin Adı</Table.HeaderCell>
            <Table.HeaderCell>Admin Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Admin Email</Table.HeaderCell>
            <Table.HeaderCell>Admin Cinsiyet</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {admins.map((admin) => (
            <Table.Row key={admin.adminId}>
              <Table.Cell>{admin?.user?.userFirstname}</Table.Cell>
              <Table.Cell>{admin?.user?.userLastname}</Table.Cell>
              <Table.Cell>{admin?.user?.userEmail}</Table.Cell>
              <Table.Cell>{admin?.user?.userGender}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
