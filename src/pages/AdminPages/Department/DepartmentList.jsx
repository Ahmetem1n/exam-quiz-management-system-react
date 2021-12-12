import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";

export default function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    let departmentService = new DepartmentService();
    departmentService
      .getDepartments()
      .then((result) => setDepartments(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Bölüm Id</Table.HeaderCell>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Fakülte Adı</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Silme</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {departments.map((department) => (
            <Table.Row key={department.departmentId}>
              <Table.Cell>{department?.departmentId}</Table.Cell>
              <Table.Cell>
                <Link to={`/1/department/${department.departmentId}`}>
                  {department?.departmentName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/1/faculty/${department.faculty.facultyId}`}>
                  {department?.faculty?.facultyName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/department_update/" + department.departmentId}
                >
                  Güncelleme
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/1/department_delete/" + department.departmentId}
                >
                  Silme
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/1/department_add/"}>
        Department Ekleme
      </Button>
    </div>
  );
}
