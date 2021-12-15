import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Button, Table } from "semantic-ui-react"
import DepartmentService from "../../../services/departmentService"

export default function DepartmentList() {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    let departmentService = new DepartmentService()
    departmentService
      .getDepartments()
      .then((result) => setDepartments(result.data))
  }, [])
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Department Id</Table.HeaderCell>
            <Table.HeaderCell>Department Name</Table.HeaderCell>
            <Table.HeaderCell>Faculty Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {departments.map((department) => (
            <Table.Row key={department.departmentId}>
              <Table.Cell>{department?.departmentId}</Table.Cell>
              <Table.Cell>
                <Link to={`/department/${department.departmentId}`}>
                  {department?.departmentName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/faculty/${department.faculty.facultyId}`}>
                  {department?.faculty?.facultyName}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/department_update/" + department.departmentId}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/department_delete/" + department.departmentId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/department_add/"}>
        Department Add
      </Button>
    </div>
  )
}
