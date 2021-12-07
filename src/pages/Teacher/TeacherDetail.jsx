import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import TeacherService from "../../services/teacherService";

export default function TeacherDetail() {
  let { teacherId } = useParams();
  const [teachers, setTeachers] = useState({});
  useEffect(() => {
    let teacherService = new TeacherService();
    teacherService
      .getByTeacherId(teacherId)
      .then((result) => setTeachers(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Teacher Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Profession</strong>
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
                <Table.Cell>{teachers?.teacherId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teachers?.profession}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{teachers?.user?.userId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teachers?.user?.userFirstname}</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{teachers?.user?.userLastname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teachers?.user?.userEmail}</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{teachers?.user?.nationalityId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teachers?.user?.userGender}</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{teachers?.user?.userPhoto}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teachers?.user?.userPassword}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {teachers?.user?.userRole?.roleId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {teachers?.user?.userRole?.roleName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
