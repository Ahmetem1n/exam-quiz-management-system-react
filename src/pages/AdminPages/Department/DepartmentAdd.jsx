import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, Table } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function DepartmentAdd() {
  const [facultyId, setFacultyId] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  let departmentService = new DepartmentService();

  return (
    <div>
      DEPARTMENT ADD
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Faculty Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="facultyId"
                    placeholder="Faculty Id"
                    value={facultyId ?? ""}
                    onChange={(e) => setFacultyId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Department Name</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="departmentName"
                    placeholder="Department Name"
                    value={departmentName ?? ""}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Department Add</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  departmentService.addDepartment({
                    facultyId,
                    departmentName,
                  })
                }
                disabled={!(facultyId && departmentName)}
              >
                Department Add
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
