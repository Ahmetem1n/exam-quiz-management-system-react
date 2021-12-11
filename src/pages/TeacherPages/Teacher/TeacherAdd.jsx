import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function TeacherAdd() {
  const [userId, setUserId] = useState(null);
  const [profession, setProfession] = useState(null);

  let teacherService = new TeacherService();

  const initialValues = {
    userId: "",
    profession: "",
  };
  return (
    <div>
      TEACHER EKLEME
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

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              teacherService.addTeacher({
                userId,
                profession,
              })
            }
            disabled={!(userId && profession)}
          >
            Teacher Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
