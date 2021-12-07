import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import StudentService from "../../services/studentService";

export default function StudentDetail() {
  let { studentId } = useParams();
  const [students, setStudents] = useState({});
  useEffect(() => {
    let studentService = new StudentService();
    studentService
      .getByStudentId(studentId)
      .then((result) => setStudents(result.data));
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
                  <strong>User Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>User Firstname</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
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
            </Table.Body>
            <Table.Body>
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
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Photo</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>User Password</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Role Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Role Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{students?.studentId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{students?.studentNumber}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{students?.studentGrade}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{students?.user?.userId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{students?.user?.userFirstname}</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{students?.user?.userLastname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{students?.user?.userEmail}</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{students?.user?.nationalityId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{students?.user?.userGender}</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{students?.user?.userPhoto}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{students?.user?.userPassword}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{students?.user?.userRole?.roleId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{students?.user?.userRole?.roleName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
