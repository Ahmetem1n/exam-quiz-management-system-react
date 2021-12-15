import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import AdminService from "../../../services/adminService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function AdminDelete() {
  let { adminId } = useParams();
  let adminService = new AdminService();

  return (
    <div>
      ADMİN DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput value={adminId} />

          <Button
            color="green"
            type="submit"
            onClick={() => adminService.deleteAdmin(adminId)}
          >
            Admin Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
