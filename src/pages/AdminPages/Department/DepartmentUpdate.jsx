import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function DepartmentUpdate() {
  let { departmentId } = useParams();
  const [department, setDepartment] = useState({});
  let departmentService = new DepartmentService();

  useEffect(() => {
    departmentService
      .getByDepartmentId(departmentId)
      .then((result) => setDepartment(result.data));
  }, []);

  const [facultyId, setFacultyId] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);

  const initialValues = {};
  return (
    <div>
      DEPARTMENT UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Department Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="departmentId" value={departmentId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Faculty Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="facultyId"
                    placeholder="Faculty Id"
                    value={facultyId ?? department?.faculty?.facultyId}
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
                    value={departmentName ?? department?.departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Department Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  departmentService.updateDepartment({
                    departmentId,
                    facultyId,
                    departmentName,
                  })
                }
                disabled={!(facultyId && departmentName)}
              >
                Department Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
