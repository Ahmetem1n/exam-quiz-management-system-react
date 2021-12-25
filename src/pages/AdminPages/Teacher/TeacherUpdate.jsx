import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Form, Table } from "semantic-ui-react";
import TeacherService from "../../../services/teacherService";
import ExamQuizTextInput from "../../../utilities/ExamQuizTextInput";

export default function TeacherUpdate() {
  let { teacherId } = useParams();
  const [teacher, setTeacher] = useState({});
  let teacherService = new TeacherService();
  useEffect(() => {
    teacherService
      .getByTeacherId(teacherId)
      .then((result) => setTeacher(result.data));
  }, []);
  const [userId, setUserId] = useState(null);
  const [profession, setProfession] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);

  const initialValues = {};
  return (
    <div>
      TEACHER UPDATE
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width="1">
              <strong>Teacher Id</strong>
            </Table.Cell>
            <Table.Cell width="4">
              <Formik initialValues={initialValues}>
                <Form className="ui form">
                  <ExamQuizTextInput name="teacherId" value={teacherId} />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>User Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="userId"
                    placeholder="User Id"
                    value={userId ?? teacher?.user?.userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Profession</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="profession"
                    placeholder="Profession"
                    value={profession ?? teacher?.profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Department Id</strong>
            </Table.Cell>
            <Table.Cell>
              <Formik>
                <Form className="ui form">
                  <ExamQuizTextInput
                    name="departmentId"
                    placeholder="Department Id"
                    value={departmentId ?? teacher?.department?.departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                  />
                </Form>
              </Formik>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <strong>Teacher Update</strong>
            </Table.Cell>
            <Table.Cell>
              <Button
                color="green"
                type="submit"
                onClick={() =>
                  teacherService.updateTeacher({
                    teacherId,
                    userId,
                    profession,
                    departmentId,
                  })
                }
                disabled={!(userId && profession && departmentId)}
              >
                Teacher Update
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
