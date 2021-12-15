import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionStudentAdd() {
  const [questionId, setQuestionId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  let questionStudentService = new QuestionStudentService();

  const initialValues = {
    questionId: "",
    studentId: "",
  };
  return (
    <div>
      QUESTİON-STUDENT ADD
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="questionId"
            placeholder="Question Id"
            value={questionId ?? ""}
            onChange={(e) => setQuestionId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? ""}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionStudentService.addQuestionStudent({
                questionId,
                studentId,
              })
            }
            disabled={!(questionId && studentId)}
          >
            Question-Student Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
