import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form,  } from "semantic-ui-react";
import AdminService from "../../../services/adminService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function AdminAdd() {
  const [userId, setUserId] = useState(null);

  let adminService = new AdminService();

  const initialValues = {
    userId: "",
  };
  return (
    <div>
      ADMİN ADD
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="userId"
            placeholder="User Id"
            value={userId ?? ""}
            onChange={(e) => setUserId(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              adminService.addAdmin({
                userId,
              })
            }
            disabled={!userId}
          >
            Admin Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
