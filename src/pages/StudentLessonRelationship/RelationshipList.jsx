import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../services/studentLessonRelationshipService";

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
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Öğrenci Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {relationships.map((relationship) => (
            <Table.Row key={relationship.relationshipId}>
              <Table.Cell>{relationship?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>{relationship?.student?.studentFirstname}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
