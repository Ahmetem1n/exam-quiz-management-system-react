import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import AdminService from "../../services/adminService";
import ExamQuizTextInput from "../../utilities/ExamQuizTextInput";

export default function AdminUpdate() {
  let { adminId } = useParams();
  const [admin, setAdmin] = useState({});
  let adminService = new AdminService();
  useEffect(() => {
    adminService.getByAdminId(adminId).then((result) => setAdmin(result.data));
  }, []);
  const [userId, setUserId] = useState(null);

  const initialValues = {
    adminId: "",
    userId: "",
  };
  return (
    <div>
      ADMİN GUNCELLEME
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="adminId"
            placeholder="Admin Id"
            value={adminId}
          />
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? admin.userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() =>
              adminService.updateAdmin({
                adminId,
                userId,
              })
            }
            disabled={!userId}
          >
            Admin Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
