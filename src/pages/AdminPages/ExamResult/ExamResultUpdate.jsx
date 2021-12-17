import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamResultUpdate() {
  let { resultId } = useParams();
  const [examResult, setExamResult] = useState({});
  const [examId, setExamId] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [result, setResult] = useState(null);

  let examResultService = new ExamResultService();
  useEffect(() => {
    examResultService
      .getByResultId(resultId)
      .then((result) => setExamResult(result.data));
  }, []);

  const initialValues = {
    examId: "",
    studentId: "",
    result: "",
  };
  return (
    <div>
      EXAM RESULT UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="resultId" value={resultId} />

          <ExamQuizTextInput
            name="examId"
            placeholder="Exam Id"
            value={examId ?? examResult?.exam?.examId}
            onChange={(e) => setExamId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? examResult?.student?.studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <ExamQuizTextInput
            name="result"
            placeholder="Result"
            value={result ?? examResult?.result}
            onChange={(e) => setResult(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              examResultService.updateResult({
                resultId,
                examId,
                studentId,
                result,
              })
            }
            disabled={!(examId && studentId && result)}
          >
            Exam Result Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
