import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Table } from "semantic-ui-react";
import LessonService from "../../../services/lessonService";

export default function LessonDetail() {
  let { lessonId } = useParams();
  const [lessons, setLessons] = useState({});
  useEffect(() => {
    let lessonService = new LessonService();
    lessonService
      .getByLessonId(lessonId)
      .then((result) => setLessons(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Column width={4}>
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
                <Table.Cell>{lessons?.lessonId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{lessons?.lessonName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{lessons?.lessonTeamsCode}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{lessons?.lessonMaterialLink}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{lessons?.department?.departmentId}</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>{lessons?.department?.departmentName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {lessons?.department?.faculty?.facultyName}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Table>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{lessons?.teacher?.teacherId}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {lessons?.teacher?.user?.userFirstname +
                    " " +
                    lessons?.teacher?.user?.userLastname}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}
