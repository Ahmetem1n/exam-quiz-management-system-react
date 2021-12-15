import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

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
  const [departmentId, setDepartmentId] = useState(null);

  const initialValues = {
    userId: "",
    profession: "",
    departmentId: "",
  };
  return (
    <div>
      TEACHER UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="teacherId" value={teacherId} />
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? teacher?.user?.userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <ExamQuizTextInput
            name="profession"
            placeholder="Profession"
            value={profession ?? teacher?.profession}
            onChange={(e) => setProfession(e.target.value)}
          />
          <ExamQuizTextInput
            name="departmentId"
            placeholder="Department Id"
            value={departmentId ?? teacher?.department?.departmentId}
            onChange={(e) => setDepartmentId(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              teacherService.updateTeacher({
                teacherId,
                userId,
                profession,
                departmentId,
              })
            }
            disabled={!(userId && profession && departmentId)}
          >
            Teacher Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
