import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";

export default function AdminHomePage() {
  return (
    <div>
      <Grid>
        <Grid.Row columns={6}>
          <Grid.Column as={NavLink} to={"/admins"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/admin.jfif"
              bordered
            />
            ADMINS
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/departments"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/department.jfif"
              bordered
            />
            DEPARTMENTS
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/exams"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/exam.jfif?Web=1"
              bordered
            />
            EXAMS
          </Grid.Column>

          <Grid.Column as={NavLink} to={"/examResults"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/exam-result.jpeg"
              bordered
            />
            EXAM RESULTS
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/faculties"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/faculty.jfif?Web=1"
              bordered
            />
            FACULTIES
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/lessons"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/lesson.jfif?Web=1"
              bordered
            />
            LESSONS
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={6}>
          <Grid.Column as={NavLink} to={"/questions"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/question.jfif?Web=1"
              bordered
            />
            QUESTIONS
          </Grid.Column>

          <Grid.Column as={NavLink} to={"/questionStudents"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%c4%b0Z%20RES%c4%b0MLER/question-student.png?Web=1"
              bordered
            />
            QUESTION-STUDENTS
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/students"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/student.jfif"
              bordered
            />
            STUDENTS
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/studentLessonRelationships"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/student-lesson-relationship.jfif"
              bordered
            />
            STUDENT-LESSON RELATIONSHIPS
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/teachers"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/teacher.jfif"
              bordered
            />
            TEACHERS
          </Grid.Column>
          <Grid.Column as={NavLink} to={"/users"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/user.jfif"
              bordered
            />
            USERS
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={6}>
          <Grid.Column as={NavLink} to={"/userRoles"}>
            <Image
              src="https://cumhuriyetedutr-my.sharepoint.com/personal/2018141024_cumhuriyet_edu_tr/Documents/EXAM-QU%C4%B0Z%20RES%C4%B0MLER/user-role.png"
              bordered
            />
            USER ROLES
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
