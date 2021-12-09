import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import TeacherService from "../../services/teacherService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function TeacherUpdate() {
  let { teacherId } = useParams();
  const [teacher, setTeacher] = useState({});
  let teacherService = new TeacherService();
  useEffect(() => {
    teacherService
      .getByTeacherId(teacherId)
      .then((result) => setTeacher(result.data));
  }, []);
  const [userId, setUserId] = useState(null);
  const [profession, setProfession] = useState(null);

  const initialValues = {
    teacherId: "",
    userId: "",
    profession: "",
  };
  return (
    <div>
      TEACHER GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="teacherId"
            placeholder="Teacher Id"
            value={teacherId}
          />
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? teacher.userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <ExamQuizTextInput
            name="profession"
            placeholder="Profession"
            value={profession ?? teacher.profession}
            onChange={(e) => setProfession(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              teacherService.updateTeacher({
                teacherId,
                userId,
                profession,
              })
            }
            disabled={!(userId && profession)}
          >
            Teacher Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
