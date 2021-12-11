import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function QuestionStudentAdd() {
  let { detailId } = useParams();
  const [questionStudent, setQuestionStudent] = useState({});
  let questionStudentService = new QuestionStudentService();
  useEffect(() => {
    questionStudentService
      .getByDetailId(detailId)
      .then((result) => setQuestionStudent(result.data));
  }, []);
  const [questionId, setQuestionId] = useState(null);
  const [studentId, setStudentId] = useState(null);

  const initialValues = {
    detailId: "",
    questionId: "",
    studentId: "",
  };
  return (
    <div>
      QUESTİON-STUDENT GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="detailId"
            placeholder="Detail Id"
            value={detailId}
          />
          <ExamQuizTextInput
            name="questionId"
            placeholder="Question Id"
            value={questionId ?? questionStudent.questionId}
            onChange={(e) => setQuestionId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? questionStudent.studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              questionStudentService.updateQuestionStudent({
                detailId,
                questionId,
                studentId,
              })
            }
            disabled={!(questionId && studentId)}
          >
            Question-Student Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
