import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
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
      QUESTİON-STUDENT UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="detailId" value={detailId} />
          <ExamQuizTextInput
            name="questionId"
            placeholder="Question Id"
            value={questionId ?? questionStudent?.question?.questionId}
            onChange={(e) => setQuestionId(e.target.value)}
          />

          <ExamQuizTextInput
            name="studentId"
            placeholder="Student Id"
            value={studentId ?? questionStudent?.student?.studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

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
