import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import StudentService from "../../../services/studentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function StudentUpdate() {
  let { studentId } = useParams();
  const [student, setStudent] = useState({});
  let studentService = new StudentService();
  useEffect(() => {
    studentService
      .getByStudentId(studentId)
      .then((result) => setStudent(result.data));
  }, []);
  const [userId, setUserId] = useState(null);
  const [studentNumber, setStudentNumber] = useState(null);
  const [studentGrade, setStudentGrade] = useState(null);

  const initialValues = {
    studentId: "",
    userId: "",
    studentNumber: "",
    studentGrade: "",
  };
  return (
    <div>
      STUDENT GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId}
          />
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? student.userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentNumber"
            placeholder="Student Number"
            value={studentNumber ?? student.studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
          <ExamQuizTextInput
            name="studentGrade"
            placeholder="Student Grade"
            value={studentGrade ?? student.studentGrade}
            onChange={(e) => setStudentGrade(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              studentService.updateStudent({
                studentId,
                userId,
                studentNumber,
                studentGrade,
              })
            }
            disabled={!(userId && studentNumber && studentGrade)}
          >
            Student Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
