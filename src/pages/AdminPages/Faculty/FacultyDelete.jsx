import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function FacultyDelete() {
  let { facultyId } = useParams();
  let facultyService = new FacultyService();

  return (
    <div>
      FACULTY SİLME
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="facultyId" value={facultyId} />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => facultyService.deleteFaculty(facultyId)}
            disabled={!facultyId}
          >
            Faculty Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
