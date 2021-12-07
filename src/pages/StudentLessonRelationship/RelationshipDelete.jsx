import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import StudentLessonRelationshipService from "../../services/studentLessonRelationshipService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function RealtionshipDelete() {
  let { relationshipId } = useParams();
  let relationshipService = new StudentLessonRelationshipService();

  const initialValues = {
    relationshipId: "",
  };
  return (
    <div>
      STUDENT-LESSON RELATIONSHIP SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="relationshipId"
            placeholder="relationship Id"
            value={relationshipId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              relationshipService.deleteRelationship(relationshipId)
            }
            disabled={!relationshipId}
          >
            Relationship Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
