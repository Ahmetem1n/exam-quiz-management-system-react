import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useParams } from "react-router";
import { Button, Form,  } from "semantic-ui-react";
import AdminService from "../../../services/adminService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function AdminUpdate() {
  let { adminId } = useParams();
  const [admin, setAdmin] = useState({});
  let adminService = new AdminService();
  useEffect(() => {
    adminService.getByAdminId(adminId).then((result) => setAdmin(result.data));
  }, []);
  const [userId, setUserId] = useState(null);

  const initialValues = {
    userId: "",
  };
  return (
    <div>
      ADMİN UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="adminId" value={adminId} />
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? admin?.user?.userId}
            onChange={(e) => setUserId(e.target.value)}
          />

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
