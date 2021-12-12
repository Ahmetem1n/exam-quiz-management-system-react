import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamDelete() {
  let { examId } = useParams();
  let examService = new ExamService();

  return (
    <div>
      EXAM SİLME
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="examId" value={examId} />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => examService.deleteExam(examId)}
            disabled={!examId}
          >
            Exam Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
