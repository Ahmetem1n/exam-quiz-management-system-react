import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserRoleDelete() {
  let { roleId } = useParams();
  let userRoleService = new UserRoleService();

  return (
    <div>
      USER ROLE SİLME
      <Formik >
        <Form className="ui form">
          <ExamQuizTextInput
            name="roleId"
            value={roleId}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => userRoleService.deleteRole(roleId)}
            disabled={!roleId}
          >
            User Role Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
