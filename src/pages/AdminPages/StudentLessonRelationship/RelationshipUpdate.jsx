import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function RelationshipUpdate() {
  let { relationshipId } = useParams();
  const [studentLesson, setStudentLesson] = useState({});
  let relationshipService = new StudentLessonRelationshipService();
  useEffect(() => {
    relationshipService
      .getByRelationshipId(relationshipId)
      .then((result) => setStudentLesson(result.data));
  }, []);
  const [lessonId, setLessonId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  const initialValues = {
    lessonId: "",
    studentId: "",
  };
  return (
    <div>
      STUDENT-LESSON RELATIONSHIP UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="relationshipId" value={relationshipId} />
          <ExamQuizTextInput
            name="lessonId"
            placeholder="Lesson Id"
            value={lessonId ?? studentLesson?.lesson?.lessonId}
            onChange={(e) => setLessonId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? studentLesson?.student?.studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              relationshipService.updateRelationship({
                relationshipId,
                lessonId,
                studentId,
              })
            }
            disabled={!(lessonId && studentId)}
          >
            Student-Lesson Relationship Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
