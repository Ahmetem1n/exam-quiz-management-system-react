import { Formik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Checkbox, Form, FormField, Table } from "semantic-ui-react";
import UserService from "../../../services/userService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserLogin() {
  const [roleId, setRoleId] = useState([]);
  let userService = new UserService();

  const [nationalityId, setNationalityId] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const initialValues = {
    nationalityId: "",
    userPassword: "",
  };

  return (
    <div>
      USER GİRİS
      <Formik initialValues={initialValues}>
        <Form className="ui form">
          <ExamQuizTextInput
            name="nationalityId"
            placeholder="Nationality Id"
            value={nationalityId ?? ""}
            onChange={(e) => setNationalityId(e.target.value)}
          />

          <ExamQuizTextInput
            name="userPassword"
            placeholder="User Password"
            value={userPassword ?? ""}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
           
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={
              () =>
                userService
                  .loginUser({ nationalityId, userPassword })
                  .then((result) => setRoleId(result.data))
            }
            x={"1"}
            as ={NavLink} to ={""+roleId}
            disabled={!(nationalityId && userPassword)}
          >
            User Login
          </Button>
          <Button  as ={NavLink} to ={""+roleId}
            color="green"
            type="submit"
            onClick={
              () => {
                if (roleId == 3) {
                 
                }
              }
            }
            
          >
            User Logins
          </Button>
          
        </Form>
      </Formik>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Role Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {roleId }
              
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
