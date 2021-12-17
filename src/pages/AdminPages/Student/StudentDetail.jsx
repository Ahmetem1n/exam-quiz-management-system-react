import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import StudentService from "../../../services/studentService";

export default function StudentDetail() {
  let { studentId } = useParams();
  const [student, setStudent] = useState({});
  useEffect(() => {
    let studentService = new StudentService();
    studentService
      .getByStudentId(studentId)
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
                  <strong>Student Id</strong>
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
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Role Name</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Id</strong>
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
                  <strong>User Photo Link</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Department Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Department Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{student?.studentId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.studentNumber}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.studentGrade}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{student?.user?.userRole?.roleName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.user?.userId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.user?.userFirstname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.user?.userLastname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.user?.userEmail}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.user?.nationalityId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.user?.userGender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.user?.userPhoto}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{student?.department?.departmentId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{student?.department?.departmentName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
