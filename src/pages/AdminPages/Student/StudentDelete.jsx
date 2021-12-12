import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import StudentService from "../../../services/studentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function StudentDelete() {
  let { studentId } = useParams();
  let studentService = new StudentService();

  return (
    <div>
      STUDENT SİLME
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="studentId" value={studentId} />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => studentService.deleteStudent(studentId)}
          >
            Student Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
