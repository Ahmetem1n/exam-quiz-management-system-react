import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";

export default function TeacherList() {
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
            <Table.HeaderCell>Teacher Firstname</Table.HeaderCell>
            <Table.HeaderCell>Teacher Lastname</Table.HeaderCell>
            <Table.HeaderCell>Teacher Gender</Table.HeaderCell>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {relationships.map((relationship) => (
            <Table.Row key={relationship.detailId}>
              <Table.Cell>
                {relationship?.lesson?.teacher?.user?.userFirstname}
              </Table.Cell>
              <Table.Cell>
                {relationship?.lesson?.teacher?.user?.userLastname}
              </Table.Cell>
              <Table.Cell>
                {relationship?.lesson?.teacher?.user?.userGender}
              </Table.Cell>
              <Table.Cell>{relationship?.lesson?.lessonName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
