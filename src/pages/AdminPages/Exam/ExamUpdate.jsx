import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import ExamService from "../../../services/examService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function ExamUpdate() {
  let { examId } = useParams();
  const [exam, setExam] = useState({});

  let examService = new ExamService();
  useEffect(() => {
    examService.getByExamId(examId).then((result) => setExam(result.data));
  }, []);

  const [lessonId, setLessonId] = useState(null);
  const [active, setActive] = useState(null);

  const initialValues = {
    lessonId: "",
    active: "",
  };
  return (
    <div>
      EXAM UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="examId" value={examId} />
          <ExamQuizTextInput
            name="lessonId"
            placeholder="Lesson Id"
            value={lessonId ?? exam?.lesson?.lessonId}
            onChange={(e) => setLessonId(e.target.value)}
          />

          <ExamQuizTextInput
            name="active"
            placeholder="Active"
            value={active ?? exam.active}
            onChange={(e) => setActive(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              examService.updateExam({
                examId,
                lessonId,
                active,
              })
            }
            disabled={!(lessonId && active)}
          >
            Exam Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
