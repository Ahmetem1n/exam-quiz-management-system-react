import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import AdminService from "../../../services/adminService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function AdminAdd() {
  const [userId, setUserId] = useState(null);

  let adminService = new AdminService();

  return (
    <div>
      ADMİN ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>User Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik >
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userId"
                    placeholder="User Id"
                    value={userId ?? ""}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <strong>Admin Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  adminService.addAdmin({
                    userId,
                  })
                }
                disabled={!userId}
              >
                Admin Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
