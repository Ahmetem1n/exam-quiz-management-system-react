import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import ExamService from "../../../services/examService";

export default function ExamDetail() {
  let { examId } = useParams();
  const [exam, setExam] = useState({});

  let examService = new ExamService();
  useEffect(() => {
    examService.getByExamId(examId).then((result) => setExam(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
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
                  <strong>Teacher Name</strong>
                </Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>
                  <strong>Department Name</strong>
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
        </Grid.Column>

        <Grid.Column streched width={12}>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{exam?.examId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{`${exam?.active}`}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{exam?.lesson?.lessonId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{exam?.lesson?.lessonName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {exam?.lesson?.teacher?.user?.userFirstname}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {exam?.lesson?.department?.departmentId}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{exam?.lesson?.lessonTeamsCode}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{exam?.lesson?.lessonMaterialLink}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
