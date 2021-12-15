import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function DepartmentUpdate() {
  let { departmentId } = useParams();
  const [department, setDepartment] = useState({});
  let departmentService = new DepartmentService();

  useEffect(() => {
    departmentService
      .getByDepartmentId(departmentId)
      .then((result) => setDepartment(result.data));
  }, []);

  const [facultyId, setFacultyId] = useState(null);
  const [departmentName, setDepartmentName] = useState(null);

  const initialValues = {
    facultyId: "",
    departmentName: "",
  };
  return (
    <div>
      DEPARTMENT UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="departmentId" value={departmentId} />
          <ExamQuizTextInput
            name="facultyId"
            placeholder="Faculty Id"
            value={facultyId ?? department?.faculty?.facultyId}
            onChange={(e) => setFacultyId(e.target.value)}
          />

          <ExamQuizTextInput
            name="departmentName"
            placeholder="Department Name"
            value={departmentName ?? department?.departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              departmentService.updateDepartment({
                departmentId,
                facultyId,
                departmentName,
              })
            }
            disabled={!(facultyId && departmentName)}
          >
            Department Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
