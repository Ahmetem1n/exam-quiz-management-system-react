import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function DepartmentDelete() {
  let { departmentId } = useParams();
  let departmentService = new DepartmentService();

  return (
    <div>
      DEPARTMENT SİLME
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="departmentId" value={departmentId} />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => departmentService.deleteDepartment(departmentId)}
            disabled={!departmentId}
          >
            Department Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
