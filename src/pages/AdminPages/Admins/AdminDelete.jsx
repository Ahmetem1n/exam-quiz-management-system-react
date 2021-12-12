import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import AdminService from "../../../services/adminService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function AdminDelete() {
  let { adminId } = useParams();
  let adminService = new AdminService();

  return (
    <div>
      ADMİN SİLME
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput value={adminId} />
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
