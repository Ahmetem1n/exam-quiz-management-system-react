import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { Button, Table } from "semantic-ui-react"
import QuestionStudentService from "../../../services/questionStudentService"

export default function QuestionStudentList() {
  const [questionStudents, setQuestionStudents] = useState([])

  useEffect(() => {
    let questionStudentService = new QuestionStudentService()
    questionStudentService
      .getQuestionStudents()
      .then((result) => setQuestionStudents(result.data))
  }, [])
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Detail Id</Table.HeaderCell>
            <Table.HeaderCell>Question Id</Table.HeaderCell>
            <Table.HeaderCell>Student Id</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {questionStudents.map((questionStudent) => (
            <Table.Row key={questionStudent.detailId}>
              <Table.Cell>{questionStudent?.detailId}</Table.Cell>
              <Table.Cell>{questionStudent?.question?.questionId}</Table.Cell>
              <Table.Cell>{questionStudent?.student?.studentId}</Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/questionStudent_update/" + questionStudent.detailId}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  as={NavLink}
                  to={"/questionStudent_delete/" + questionStudent.detailId}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button as={NavLink} to={"/questionStudent_add"}>
        Question-Student Add
      </Button>
    </div>
  )
}
