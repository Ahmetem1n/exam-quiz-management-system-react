import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function TeacherAdd() {
  const [userId, setUserId] = useState(null);
  const [profession, setProfession] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);

  let teacherService = new TeacherService();

  const initialValues = {
    userId: "",
    profession: "",
    departmentId: "",
  };
  return (
    <div>
      TEACHER ADD
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? ""}
            onChange={(e) => setUserId(e.target.value)}
          />

          <ExamQuizTextInput
            name="profession"
            placeholder="Profession"
            value={profession ?? ""}
            onChange={(e) => setProfession(e.target.value)}
          />

          <ExamQuizTextInput
            name="departmentId"
            placeholder="Department Id"
            value={departmentId ?? ""}
            onChange={(e) => setDepartmentId(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              teacherService.addTeacher({
                userId,
                profession,
                departmentId,
              })
            }
            disabled={!(userId && profession && departmentId)}
          >
            Teacher Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
