import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";

export default function TeacherDetail() {
  let { teacherId } = useParams();
  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    let teacherService = new TeacherService();
    teacherService
      .getByTeacherId(teacherId)
      .then((result) => setTeacher(result.data));
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
                  <strong>Teacher Profession</strong>
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
                <Table.Cell>{teacher?.teacherId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.profession}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{teacher?.user?.userRole?.roleName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.user?.userId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.user?.userFirstname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.user?.userLastname}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.user?.userEmail}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.user?.nationalityId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.user?.userGender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.user?.userPhoto}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{teacher?.department?.departmentId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{teacher?.department?.departmentName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
