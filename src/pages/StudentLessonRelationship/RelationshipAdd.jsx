import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function RelationshipAdd() {
  const [lessonId, setLessonId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  let relationshipService = new StudentLessonRelationshipService();

  const initialValues = {
    lessonId: "",
    studentId: "",
  };
  return (
    <div>
      STUDENT-LESSON RELATIONSHIP EKLEME
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

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

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
  );
}
