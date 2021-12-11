import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import FacultyService from "../../../services/facultyService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function FacultyUpdate() {
  let { facultyId } = useParams();
  const [faculty, setFaculty] = useState({});
  let facultyService = new FacultyService();
  useEffect(() => {
    facultyService
      .getByFacultyId(facultyId)
      .then((result) => setFaculty(result.data));
  }, []);
  const [facultyName, setFacultyName] = useState(null);

  const initialValues = {
    facultyId: "",
    facultyName: "",
  };
  return (
    <div>
      FACULTY GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="facultyId"
            placeholder="Faculty Id"
            value={facultyId}
          />
          <ExamQuizTextInput
            name="facultyName"
            placeholder="Faculty Name"
            value={facultyName ?? faculty.facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              facultyService.updateFaculty({
                facultyId,
                facultyName,
              })
            }
            disabled={!facultyName}
          >
            Faculty Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
