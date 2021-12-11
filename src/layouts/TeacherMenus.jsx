import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function TeacherMenus() {
  return (
    <div>
      <Menu fluid vertical tabular>
        <Menu.Item name="Exams" as ={NavLink} to ={"/2/exams"}/>
        <Menu.Item name="Lessons" as ={NavLink} to ={"/2/lessons"}/>
        <Menu.Item name="Questions" as ={NavLink} to ={"/2/questions"}/>
        <Menu.Item name="QuestionStudents" as ={NavLink} to ={"/2/questionStudents"}/>
        <Menu.Item name="Students" as ={NavLink} to ={"/2/Students"}/>
        <Menu.Item name="StudentLessonRelationships" as ={NavLink} to ={"/2/studentLessonRelationships"}/>
        <Menu.Item name="Personal Information" as ={NavLink} to ={"/2/userRoles"}/>
      </Menu>
    </div>
  );
}
