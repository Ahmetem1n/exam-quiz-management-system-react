import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { Button, Grid, Table } from "semantic-ui-react";
import UserService from "../../services/userService";
import StudentService from "../../services/studentService";

export default function PersonalInformation() {
  const [user, setUser] = useState({});
  let cookie = new Cookies();
  useEffect(() => {
    let userService = new UserService();
    userService
      .getByUserId(cookie.get("userId"))
      .then((result) => setUser(result.data));
  }, []);
  const [student, setStudent] = useState({});
  useEffect(() => {
    let studentService = new StudentService();
    studentService
      .getByStudentId(cookie.get("studentId"))
      .then((result) => setStudent(result.data));
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
                  <strong>Faculty</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Department</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Student Number</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Student Grade</strong>
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
                <Table.Cell>{user?.userRole?.roleName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{user?.userFirstname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{user?.userLastname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{user?.userEmail}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{user?.nationalityId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{user?.userGender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {student?.department?.faculty?.facultyName}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.department?.departmentName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.studentNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.studentGrade}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{user?.userPassword}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Button
            color="green"
            type="submit"
            as={NavLink}
            to={"/personalInformation_update"}
          >
            Password Update
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
