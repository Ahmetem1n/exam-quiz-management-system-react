import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Grid, Table } from "semantic-ui-react";
import ExamResultService from "../../../services/examResultService";

export default function ExamResultDetail() {
  let { resultId } = useParams();

  const [examResult, setExamResult] = useState({});
  useEffect(() => {
    let examResultService = new ExamResultService();
    examResultService
      .getByResultId(resultId)
      .then((result) => setExamResult(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <strong>Exam Result Id</strong>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <strong>Exam Result</strong>
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
                <Table.Cell>{examResult?.resultId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{examResult?.result}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{examResult?.exam?.examId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{examResult?.exam?.lesson?.lessonId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{examResult?.exam?.lesson?.lessonName}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{examResult?.student?.studentId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {examResult?.student?.user?.userFirstname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
