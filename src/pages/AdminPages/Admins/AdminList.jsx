import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Button, Table } from "semantic-ui-react"
import AdminService from "../../../services/adminService"

export default function AdminList() {
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    let adminService = new AdminService()
    adminService.getAdmins().then((result) => setAdmins(result.data))
  }, [])
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Admin Id</Table.HeaderCell>
            <Table.HeaderCell>Admin Firstname</Table.HeaderCell>
            <Table.HeaderCell>Admin Lastname</Table.HeaderCell>
            <Table.HeaderCell>Admin Email</Table.HeaderCell>
            <Table.HeaderCell>Admin Gender</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {admins.map((admin) => (
            <Table.Row key={admin.adminId}>
              <Table.Cell>{admin?.adminId}</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/${admin.user.userId}`}>
                  {admin?.user?.userFirstname}
                </Link>
              </Table.Cell>
              <Table.Cell>{admin?.user?.userLastname}</Table.Cell>
              <Table.Cell>{admin?.user?.userEmail}</Table.Cell>
              <Table.Cell>{admin?.user?.userGender}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/admin_update/" + admin.adminId}>
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/admin_delete/" + admin.adminId}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/admin_add/"}>
        Admin Add
      </Button>
    </div>
  )
}
