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
                  <strong>Teacher Name</strong>
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
                <Table.Cell>{questions?.optionA}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.optionB}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.optionC}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.optionD}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.optionE}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{questions?.trueOption}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{questions?.exam?.examId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{`${questions?.exam?.active}`}</Table.Cell>
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
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.department?.departmentId}
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.department?.departmentName}
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
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.teacherId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {questions?.exam?.lesson?.teacher?.user?.userFirstname +
                    " " +
                    questions?.exam?.lesson?.teacher?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
