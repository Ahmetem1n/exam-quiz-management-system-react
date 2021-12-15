import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function TeacherDelete() {
  let { teacherId } = useParams();
  let teacherService = new TeacherService();

  return (
    <div>
      TEACHER DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="teacherId" value={teacherId} />

          <Button
            color="green"
            type="submit"
            onClick={() => teacherService.deleteTeacher(teacherId)}
          >
            Teacher Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
