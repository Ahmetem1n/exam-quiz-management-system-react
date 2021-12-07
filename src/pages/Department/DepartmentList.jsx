import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import DepartmentService from "../../services/departmentService";

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
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Fakülte Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {departments.map((department) => (
            <Table.Row key={department.departmentId}>
              <Table.Cell>{department?.departmentName}</Table.Cell>
              <Table.Cell>{department?.faculty?.facultyName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
