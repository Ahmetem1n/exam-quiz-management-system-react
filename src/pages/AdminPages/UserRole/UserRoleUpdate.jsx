import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";
import UserRoleService from "../../../services/userRoleService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserRoleUpdate() {
  let { roleId } = useParams();
  const [userRole, setUserRole] = useState({});
  let userRoleService = new UserRoleService();
  useEffect(() => {
    userRoleService
      .getByRoleId(roleId)
      .then((result) => setUserRole(result.data));
  }, []);
  const [roleName, setRoleName] = useState(null);

  const initialValues = {
    roleName: "",
  };
  return (
    <div>
      USER ROLE UPDATE
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput name="roleId" value={roleId} />
          <ExamQuizTextInput
            name="roleName"
            placeholder="Role Name"
            value={roleName ?? userRole?.roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />

          <Button
            color="green"
            type="submit"
            onClick={() =>
              userRoleService.updateRole({
                roleId,
                roleName,
              })
            }
            disabled={!roleName}
          >
            User Role Update
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
