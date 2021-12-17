import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamResultDelete() {
  let { resultId } = useParams();
  let examResultService = new ExamResultService();

  return (
    <div>
      EXAM RESULT DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="resultId" value={resultId} />

          <Button
            color="green"
            type="submit"
            onClick={() => examResultService.deleteResult(resultId)}
          >
            Exam Result Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
