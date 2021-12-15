import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamDelete() {
  let { examId } = useParams();
  let examService = new ExamService();

  return (
    <div>
      EXAM DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="examId" value={examId} />

          <Button
            color="green"
            type="submit"
            onClick={() => examService.deleteExam(examId)}
          >
            Exam Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
