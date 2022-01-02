import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserRoleUpdate() {
  let { roleId } = useParams();
  const [userRole, setUserRole] = useState({});
  let userRoleService = new UserRoleService();
  useEffect(() => {
    userRoleService
      .getByRoleId(roleId)
      .then((result) => setUserRole(result.data));
  }, []);
  const [roleName, setRoleName] = useState(null);

  const initialValues = {};
  return (
    <div>
      USER ROLE UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Role Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="roleId" value={roleId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Role Name</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="roleName"
                    placeholder="Role Name"
                    value={roleName ?? userRole?.roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Role Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  userRoleService.updateRole({
                    roleId,
                    roleName,
                  })
                }
                disabled={!roleName}
              >
                User Role Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
