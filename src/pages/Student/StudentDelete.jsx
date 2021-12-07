import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import StudentService from "../../services/studentService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function StudentDelete() {
  let { studentId } = useParams();
  let studentService = new StudentService();

  const initialValues = {
    studentId: "",
  };
  return (
    <div>
      STUDENT SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => studentService.deleteStudent(studentId)}
            disabled={!studentId}
          >
            Student Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
