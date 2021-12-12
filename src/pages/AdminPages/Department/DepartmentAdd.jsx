import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import DepartmentService from "../../../services/departmentService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function DepartmentAdd() {
  const [facultyId, setFacultyId] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  let departmentService = new DepartmentService();

  const initialValues = {
    facultyId: "",
    departmentName: "",
  };
  return (
    <div>
      DEPARTMENT EKLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="facultyId"
            placeholder="Faculty Id"
            value={facultyId ?? ""}
            onChange={(e) => setFacultyId(e.target.value)}
          />

          <ExamQuizTextInput
            name="departmentName"
            placeholder="Department Name"
            value={departmentName ?? ""}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              departmentService.addDepartment({
                facultyId,
                departmentName,
              })
            }
            disabled={!(facultyId && departmentName)}
          >
            Department Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
