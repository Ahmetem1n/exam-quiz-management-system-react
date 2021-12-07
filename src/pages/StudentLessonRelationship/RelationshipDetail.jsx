import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../services/studentLessonRelationshipService";

export default function RelationshipDetail() {
  let { relationshipId } = useParams();
  const [relationships, setRelationships] = useState({});
  useEffect(() => {
    let relationshipService = new StudentLessonRelationshipService();
    relationshipService
      .getByRelationshipId(relationshipId)
      .then((result) => setRelationships(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Relationship Id</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
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

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Lesson Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Lesson Name</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Teams Code</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Material Link</strong>
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

              <Table.Row>
                <Table.Cell>
                  <strong>Faculty Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

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
                <Table.Cell>{relationships?.relationshipId}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationships?.student?.studentId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{relationships?.student?.studentNumber}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{relationships?.student?.studentGrade}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationships?.student?.user?.userId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userFirstname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userEmail}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.nationalityId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userGender}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userPhoto}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userPassword}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userRole?.roleId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.student?.user?.userRole?.roleName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationships?.lesson?.lessonId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{relationships?.lesson?.lessonName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.lessonTeamsCode}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.lessonMaterialLink}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationships?.lesson?.departmentId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.department?.departmentName}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.department?.faculty?.facultyName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationships?.lesson?.teacherId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.profession}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userFirstname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userEmail}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.nationalityId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userGender}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userPhoto}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userPassword}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userRole?.roleId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationships?.lesson?.teacher?.user?.userRole?.roleName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
