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
            <Table.HeaderCell>İlişki Id</Table.HeaderCell>
            <Table.HeaderCell>Ders Adı</Table.HeaderCell>
            <Table.HeaderCell>Öğrenci Adı</Table.HeaderCell>
            <Table.HeaderCell>Güncelleme</Table.HeaderCell>
            <Table.HeaderCell>Silme</Table.HeaderCell>
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
                    "/1/studentLessonRelationship_update/" +
                    relationship.relationshipId
                  }
                >
                  Güncelleme
                </Button>
              </Table.Cell>

              <Table.Cell>
                <Button
                  as={NavLink}
                  to={
                    "/1/studentLessonRelationship_delete/" +
                    relationship.relationshipId
                  }
                >
                  Silme
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Button as={NavLink} to={"/1/studentLessonRelationship_add"}>
        Student-Lesson Relationship Ekleme
      </Button>
    </div>
  );
}
