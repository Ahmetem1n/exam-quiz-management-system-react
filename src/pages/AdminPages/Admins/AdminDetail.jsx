import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import AdminService from "../../../services/adminService";

export default function AdminDetail() {
  let { adminId } = useParams();
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    let adminService = new AdminService();
    adminService.getByAdminId(adminId).then((result) => setAdmin(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Admin Id</strong>
                </Table.Cell>
              </Table.Row>
              </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Role Name</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Firstname</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Lastname</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Email</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Nationality Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Gender</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Photo Link</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{admin?.adminId}</Table.Cell>
              </Table.Row>
              </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{admin?.user?.userRole?.roleName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{admin?.user?.userId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{admin?.user?.userFirstname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{admin?.user?.userLastname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{admin?.user?.userEmail}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{admin?.user?.nationalityId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{admin?.user?.userGender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{admin?.user?.userPhoto}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
