import React, { useEffect, useState } from "react"
import { Cookies } from "react-cookie"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { Button, Table } from "semantic-ui-react"
import ExamService from "../../../services/examService"

export default function ExamList() {
  const [exams, setExams] = useState([])
  let cookie = new Cookies()
  let examService = new ExamService()

  useEffect(() => {
    examService
      .getExamsByStudent(cookie.get("studentId"))
      .then((result) => setExams(result.data))
  }, [])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Lesson Name</Table.HeaderCell>
            <Table.HeaderCell>Start Exam</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exams.map((exam) => (
            <Table.Row key={exam.examId}>
              <Table.Cell>{exam?.lesson?.lessonName}</Table.Cell>
              <Table.Cell>
                <Button as={NavLink} to={"/exam_page/" + exam.examId}>
                  Start Exam
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
