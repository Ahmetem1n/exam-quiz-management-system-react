import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";

export default function RelationshipList() {
  const [relationships, setRelationships] = useState([]);

  useEffect(() => {
    let relationshipService = new StudentLessonRelationshipService();
    relationshipService
      .getRelationships()
      .then((result) => setRelationships(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Relationship Id</Table.HeaderCell>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Student Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {relationships.map((relationship) => (
            <Table.Row key={relationship.relationshipId}>
              <Table.Cell>{relationship?.relationshipId}</Table.Cell>
              <Table.Cell>{relationship?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>
                {relationship?.student?.user?.userFirstname}
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={
                    "/studentLessonRelationship_update/" +
                    relationship.relationshipId
                  }
                >
                  Update
                </Button>
              </Table.Cell>

              <Table.Cell>
                <Button
                  as={NavLink}
                  to={
                    "/studentLessonRelationship_delete/" +
                    relationship.relationshipId
                  }
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Button as={NavLink} to={"/studentLessonRelationship_add"}>
        Student-Lesson Relationship Add
      </Button>
    </div>
  );
}
