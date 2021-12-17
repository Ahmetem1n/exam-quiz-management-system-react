import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamResultAdd() {
  const [examId, setExamId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState("");

  let examResultService = new ExamResultService();

  const initialValues = {
    examId: "",
    studentId: "",
    result: "",
  };
  return (
    <div>
      EXAM RESULT ADD
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="examId"
            placeholder="Exam Id"
            value={examId ?? ""}
            onChange={(e) => setExamId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? ""}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <ExamQuizTextInput
            name="result"
            placeholder="Result"
            value={result ?? ""}
            onChange={(e) => setResult(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              examResultService.addResult({
                examId,
                studentId,
                result,
              })
            }
            disabled={!(examId && studentId && result)}
          >
            Exam Result Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
