import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function TeacherDelete() {
  let { teacherId } = useParams();
  let teacherService = new TeacherService();

  const initialValues = {
    teacherId: "",
  };
  return (
    <div>
      TEACHER SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="teacherId"
            placeholder="Teacher Id"
            value={teacherId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => teacherService.deleteTeacher(teacherId)}
            disabled={!teacherId}
          >
            Teacher Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
