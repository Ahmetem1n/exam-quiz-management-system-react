import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function AdminAdd() {
  const [roleName, setRoleName] = useState(null);

  let userRoleService = new UserRoleService();

  const initialValues = {
    roleName: "",
  };
  return (
    <div>
      USER ROLE ADD
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="roleName"
            placeholder="Role Name"
            value={roleName ?? ""}
            onChange={(e) => setRoleName(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              userRoleService.addRole({
                roleName,
              })
            }
            disabled={!roleName}
          >
            User Role Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
