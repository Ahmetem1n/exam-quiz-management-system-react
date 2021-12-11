import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import StudentService from "../../../services/studentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function StudentAdd() {
  const [userId, setUserId] = useState(null);
  const [studentNumber, setStudentNumber] = useState(null);
  const [studentGrade, setStudentGrade] = useState(null);

  let studentService = new StudentService();

  const initialValues = {
    userId: "",
    studentNumber: "",
    studentGrade: "",
  };
  return (
    <div>
      STUDENT EKLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? ""}
            onChange={(e) => setUserId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentNumber"
            placeholder="Student Number"
            value={studentNumber ?? ""}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
          <ExamQuizTextInput
            name="studentGrade"
            placeholder="Student Grade"
            value={studentGrade ?? ""}
            onChange={(e) => setStudentGrade(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              studentService.addStudent({
                userId,
                studentNumber,
                studentGrade,
              })
            }
            disabled={!(userId && studentNumber && studentGrade)}
          >
            Student Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
