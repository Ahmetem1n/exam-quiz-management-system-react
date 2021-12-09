import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

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
    relationshipId: "",
    lessonId: "",
    studentId: "",
  };
  return (
    <div>
      STUDENT-LESSON RELATIONSHIP GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="relationshipId"
            placeholder="Relationship Id"
            value={relationshipId}
          />
          <ExamQuizTextInput
            name="lessonId"
            placeholder="Lesson Id"
            value={lessonId ?? studentLesson.lessonId}
            onChange={(e) => setLessonId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? studentLesson.studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

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
