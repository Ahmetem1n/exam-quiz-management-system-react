import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import QuestionService from "../../../services/questionService";

export default function QuestionDetail() {
  let { questionId } = useParams();
  const [questions, setQuestions] = useState({});
  useEffect(() => {
    let questionService = new QuestionService();
    questionService
      .getByQuestionId(questionId)
      .then((result) => setQuestions(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Question Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Question Text</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Question Options Text</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>True Option</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Marked Option</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Exam Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Active</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Lesson Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Lesson Name</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Teams Code</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Material Link</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Department Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Department Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Faculty Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Faculty Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Teacher Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Teacher Profession</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>User Firstname</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Lastname</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>User Email</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Nationality Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>User Gender</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Photo</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>User Password</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>User Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Role</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questions?.questionId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.questionText}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.questionOptionsText}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.trueOption}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.markedOption}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questions?.exam?.examId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.exam?.examId}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questions?.exam?.lesson?.lessonId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.exam?.lesson?.lessonName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.lessonTeamsCode}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.lessonMaterialLink}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questions?.exam?.lesson?.departmentId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.department?.departmentName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.department?.faculty?.facultyId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.department?.faculty?.facultyName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questions?.exam?.lesson?.teacherId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.profession}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userFirstname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userEmail}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.nationalityId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userGender}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userPhoto}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userPassword}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userRole?.roleId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userRole?.roleName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
