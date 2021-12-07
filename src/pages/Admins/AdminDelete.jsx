import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import AdminService from "../../services/adminService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function AdminDelete() {
  let { adminId } = useParams();
  let adminService = new AdminService();

  const initialValues = {
    adminId: "",
  };
  return (
    <div>
      ADMİN SİLME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="adminId"
            placeholder="Admin Id"
            value={adminId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => adminService.deleteAdmin(adminId)}
            disabled={!adminId}
          >
            Admin Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
