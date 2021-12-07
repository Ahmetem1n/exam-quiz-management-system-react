import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import FacultyService from "../../services/facultyService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function FacultyAdd() {
  const [facultyName, setFacultyName] = useState(null);

  let facultyService = new FacultyService();

  const initialValues = {
    facultyName: "",
  };
  return (
    <div>
      FACULTY EKLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="facultyName"
            placeholder="Faculty Name"
            value={facultyName ?? ""}
            onChange={(e) => setFacultyName(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              facultyService.addFaculty({
                facultyName,
              })
            }
            disabled={!facultyName}
          >
            Faculty Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
