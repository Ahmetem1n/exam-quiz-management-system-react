import { Formik } from "formik"
import React, { useState } from "react"
import { Button, Form,  } from "semantic-ui-react"
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService"
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput"

export default function RelationshipAdd() {
  const [lessonId, setLessonId] = useState(null)
  const [studentId, setStudentId] = useState(null)

  let relationshipService = new StudentLessonRelationshipService()

  const initialValues = {
    lessonId: "",
    studentId: "",
  }
  return (
    <div>
      STUDENT-LESSON RELATIONSHIP ADD
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="lessonId"
            placeholder="Lesson Id"
            value={lessonId ?? ""}
            onChange={(e) => setLessonId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? ""}
            onChange={(e) => setStudentId(e.target.value)}
          />

          

          <Button
            color="green"
            type="submit"
            onClick={() =>
              relationshipService.addRelationship({
                lessonId,
                studentId,
              })
            }
            disabled={!(lessonId && studentId)}
          >
            Student-Lesson Relationship Add
          </Button>
        </Form>
      </Formik>
    </div>
  )
}
