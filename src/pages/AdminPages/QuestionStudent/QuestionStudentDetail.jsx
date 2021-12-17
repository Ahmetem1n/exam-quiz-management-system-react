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
                  <strong>Exam Id</strong>
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
                  <strong>Option A</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Option B</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Option C</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Option D</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Option E</strong>
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
                  <strong>Lesson Id</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Lesson Name</strong>
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
                  <strong>Teacher Name</strong>
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
                  <strong>Student Name</strong>
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
                  {questionStudents?.question?.questionId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.questionText}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questionStudents?.question?.optionA}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questionStudents?.question?.optionB}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questionStudents?.question?.optionC}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questionStudents?.question?.optionD}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questionStudents?.question?.optionE}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.trueOption}
                </Table.Cell>
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
                  {questionStudents?.question?.exam?.lesson?.lessonId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.lessonName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.teacher?.teacherId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questionStudents?.question?.exam?.lesson?.teacher?.user
                    ?.userFirstname +
                    " " +
                    questionStudents?.question?.exam?.lesson?.teacher?.user
                      ?.userLastname}
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
                  {questionStudents?.student?.user?.userFirstname +
                    " " +
                    questionStudents?.student?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
