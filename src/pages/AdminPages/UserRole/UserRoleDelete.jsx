import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserRoleDelete() {
  let { roleId } = useParams();
  let userRoleService = new UserRoleService();

  return (
    <div>
      USER ROLE DELETE
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="roleId" value={roleId} />

          <Button
            color="green"
            type="submit"
            onClick={() => userRoleService.deleteRole(roleId)}
          >
            User Role Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
