import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";

export default function LessonList() {
  const [relationships, setRelationships] = useState([]);
  let cookie = new Cookies();

  useEffect(() => {
    let relationshipService = new StudentLessonRelationshipService();
    relationshipService
      .getByStudentId(cookie.get("studentId"))
      .then((result) => setRelationships(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Department Name</Table.HeaderCell>
            <Table.HeaderCell>Teacher Name</Table.HeaderCell>
            <Table.HeaderCell>Lesson Teams Code</Table.HeaderCell>
            <Table.HeaderCell>Lesson Material Link</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {relationships.map((relationship) => (
            <Table.Row key={relationship.relationshipId}>
              <Table.Cell>{relationship?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>
                {relationship?.lesson?.department?.departmentName}
              </Table.Cell>
              <Table.Cell>
                {relationship?.lesson?.teacher?.user?.userFirstname}
              </Table.Cell>
              <Table.Cell>{relationship?.lesson?.lessonTeamsCode}</Table.Cell>
              <Table.Cell>
                {relationship?.lesson?.lessonMaterialLink}
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/exams/" + relationship?.lesson?.lessonId}
                >
                  Exams
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
