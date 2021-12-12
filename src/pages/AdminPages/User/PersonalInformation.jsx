import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Grid, Table } from "semantic-ui-react";
import AdminService from "../../../services/adminService";

export default function PersonalInformation() {
  const [admin, setAdmin] = useState({});
  let cookie = new Cookies();
  useEffect(() => {
    let adminService = new AdminService();
    adminService
      .getByAdminId(cookie.get("userId"))
      .then((result) => setAdmin(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Role</strong>
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
              <Table.Row>
                <Table.Cell>
                  <strong>User Password</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={8}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{admin?.user?.userRole?.roleName}</Table.Cell>
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
                <Table.Cell>{admin?.user?.userPassword}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
