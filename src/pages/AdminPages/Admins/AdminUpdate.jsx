import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import AdminService from "../../../services/adminService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function AdminUpdate() {
  let { adminId } = useParams();
  const [admin, setAdmin] = useState({});
  let adminService = new AdminService();
  useEffect(() => {
    adminService.getByAdminId(adminId).then((result) => setAdmin(result.data));
  }, []);
  let userId = admin?.user?.userId;
  const initialValues = {};
  return (
    <div>
      ADMİN UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Admin Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="adminId" value={adminId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="userId" value={userId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Admin Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  adminService.updateAdmin({
                    adminId,
                    userId,
                  })
                }
              >
                Admin Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
