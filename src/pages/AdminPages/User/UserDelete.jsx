import { Formik } from "formik";
import React from "react";
import { useParams } from "react-router";
import { Button, Checkbox, Form, FormField } from "semantic-ui-react";
import UserService from "../../../services/userService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function UserDelete() {
  let { userId } = useParams();
  let userService = new UserService();

  return (
    <div>
      USER SİLME
      <Formik>
        <Form className="ui form">
          <ExamQuizTextInput name="userId" value={userId} />
          <FormField>
            <Checkbox label="I agree to the Terms and Conditions" />
          </FormField>

          <Button
            color="green"
            type="submit"
            onClick={() => userService.deleteUser(userId)}
          >
            User Delete
          </Button>
        </Form>
      </Formik>
    </div>
  );
}