import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
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
  const [departmentId, setDepartmentId] = useState(null);

  const initialValues = {
    userId: "",
    studentNumber: "",
    studentGrade: "",
    departmentId: "",
  };
  return (
    <div>
      STUDENT UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="studentId" value={studentId} />
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? student?.user?.userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentNumber"
            placeholder="Student Number"
            value={studentNumber ?? student?.studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
          <ExamQuizTextInput
            name="studentGrade"
            placeholder="Student Grade"
            value={studentGrade ?? student?.studentGrade}
            onChange={(e) => setStudentGrade(e.target.value)}
          />
          <ExamQuizTextInput
            name="departmentId"
            placeholder="Department Id"
            value={departmentId ?? student?.department?.departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              studentService.updateStudent({
                studentId,
                userId,
                studentNumber,
                studentGrade,
                departmentId,
              })
            }
            disabled={
              !(userId && studentNumber && studentGrade && departmentId)
            }
          >
            Student Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
