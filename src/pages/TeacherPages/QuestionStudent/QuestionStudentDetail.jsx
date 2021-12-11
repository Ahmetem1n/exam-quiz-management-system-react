import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import QuestionStudentService from "../../../services/questionStudentService";

export default function QuestionStudentDetail() {
  let { detailId } = useParams();
  const [questionStudents, setQuestionStudents] = useState({});
  useEffect(() => {
    let questionStudentService = new QuestionStudentService();
    questionStudentService
      .getByDetailId(detailId)
      .then((result) => setQuestionStudents(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Detail Id</strong>
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

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Student Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Student Number</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Student Grade</strong>
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
                  <strong>User Role Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>User Role Name</strong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questionStudents?.detailId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questionStudents?.markedOption}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.questionId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.questionText}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.questionOptionsText}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.trueOption}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.markedOption}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.examId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.examId}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.lessonId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.lessonName}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.lessonTeamsCode}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.lessonMaterialLink}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.departmentId}
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.department
                      ?.departmentName
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.department
                      ?.faculty?.facultyId
                  }
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.department
                      ?.faculty?.facultyName
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.teacherId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher
                      ?.profession
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userId
                  }
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userFirstname
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userLastname
                  }
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userEmail
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.nationalityId
                  }
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userGender
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userPhoto
                  }
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userPassword
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userRole?.roleId
                  }
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userRole?.roleName
                  }
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questionStudents?.student?.studentId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.studentNumber}
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.studentGrade}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userFirstname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userEmail}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.nationalityId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userGender}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userPhoto}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userPassword}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userRole?.roleId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.student?.user?.userRole?.roleName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
