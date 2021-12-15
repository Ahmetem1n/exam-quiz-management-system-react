import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function FacultyDelete() {
  let { facultyId } = useParams();
  let facultyService = new FacultyService();

  return (
    <div>
      FACULTY DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="facultyId" value={facultyId} />

          <Button
            color="green"
            type="submit"
            onClick={() => facultyService.deleteFaculty(facultyId)}
          >
            Faculty Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
