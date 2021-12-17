import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";

export default function RelationshipDetail() {
  let { relationshipId } = useParams();
  const [relationship, setRelationship] = useState({});
  useEffect(() => {
    let relationshipService = new StudentLessonRelationshipService();
    relationshipService
      .getByRelationshipId(relationshipId)
      .then((result) => setRelationship(result.data));
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
                  <strong>Teacher Name</strong>
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
                  <strong>Student Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationship?.relationshipId}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationship?.lesson?.lessonId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{relationship?.lesson?.lessonName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {relationship?.lesson?.teacher?.user?.userFirstname +
                    " " +
                    relationship?.lesson?.teacher?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{relationship?.student?.studentId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {relationship?.student?.user?.userFirstname +
                    " " +
                    relationship?.student?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
