import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionStudentDelete() {
  let { detailId } = useParams();
  let questionStudentService = new QuestionStudentService();

  const initialValues = {
    detailId: "",
  };
  return (
    <div>
      QUESTİON-STUDENT SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="detailId"
            placeholder="Detail Id"
            value={detailId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionStudentService.deleteQuestionStudent(detailId)
            }
            disabled={!detailId}
          >
            Question Student Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
