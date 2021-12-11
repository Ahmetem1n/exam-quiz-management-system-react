import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamDelete() {
  let { examId } = useParams();
  let examService = new ExamService();

  const initialValues = {
    examId: "",
  };
  return (
    <div>
      EXAM SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="examId"
            placeholder="Exam Id"
            value={examId}
          />
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
