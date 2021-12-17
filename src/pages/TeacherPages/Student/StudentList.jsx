import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { Table } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";

export default function StudentList() {
  const [relationships, setRelationships] = useState([]);
  let cookie = new Cookies();

  useEffect(() => {
    let relationshipService = new StudentLessonRelationshipService();
    relationshipService
      .getByTeacher(cookie.get("teacherId"))
      .then((result) => setRelationships(result.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student Firstname</Table.HeaderCell>
            <Table.HeaderCell>Student Lastname</Table.HeaderCell>
            <Table.HeaderCell>Student Gender</Table.HeaderCell>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {relationships.map((relationship) => (
            <Table.Row key={relationship.relationshipId}>
              <Table.Cell>
                {relationship?.student?.user?.userFirstname}
              </Table.Cell>
              <Table.Cell>
                {relationship?.student?.user?.userLastname}
              </Table.Cell>
              <Table.Cell>{relationship?.student?.user?.userGender}</Table.Cell>
              <Table.Cell>{relationship?.lesson?.lessonName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
