import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function DepartmentDelete() {
  let { departmentId } = useParams();
  let departmentService = new DepartmentService();

  return (
    <div>
      DEPARTMENT DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="departmentId" value={departmentId} />

          <Button
            color="green"
            type="submit"
            onClick={() => departmentService.deleteDepartment(departmentId)}
          >
            Department Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
