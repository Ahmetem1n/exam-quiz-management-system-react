import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";

export default function TeacherHomePage() {
  return (
    <div>
      <Grid>
        <Grid.Row columns={5}>
          <Grid.Column as={NavLink} to={"/exams"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/exam.jfif?Web=1"
              bordered
            />
            EXAMS
          </Grid.Column>

          <Grid.Column as={NavLink} to={"/lessons"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/lesson.jfif?Web=1"
              bordered
            />
            LESSONS
          </Grid.Column>

          <Grid.Column as={NavLink} to={"/students"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/student.jfif"
              bordered
            />
            STUDENTS
          </Grid.Column>

          <Grid.Column as={NavLink} to={"/personalInformation"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/personal-information.jfif?Web=1"
              bordered
            />
            PERSONAL INFORMATION
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
