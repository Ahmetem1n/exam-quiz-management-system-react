import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function RealtionshipDelete() {
  let { relationshipId } = useParams();
  let relationshipService = new StudentLessonRelationshipService();

  return (
    <div>
      STUDENT-LESSON RELATIONSHIP DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="relationshipId" value={relationshipId} />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              relationshipService.deleteRelationship(relationshipId)
            }
          >
            Relationship Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
