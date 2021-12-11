import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function AdminMenus() {
  return (
    <div>
      <Menu fluid vertical tabular>
        <Menu.Item name="Admins" as ={NavLink} to ={"/1/admins"}/>
        <Menu.Item name="Department" as ={NavLink} to ={"/1/departments"}/>
        <Menu.Item name="Exams" as ={NavLink} to ={"/1/exams"}/>
        <Menu.Item name="Faculties" as ={NavLink} to ={"/1/faculties"}/>
        <Menu.Item name="Lessons" as ={NavLink} to ={"/1/lessons"}/>
        <Menu.Item name="Questions" as ={NavLink} to ={"/1/questions"}/>
        <Menu.Item name="QuestionStudents" as ={NavLink} to ={"/1/questionStudents"}/>
        <Menu.Item name="Students" as ={NavLink} to ={"/1/students"}/>
        <Menu.Item name="StudentLessonRelationships" as ={NavLink} to ={"/1/studentLessonRelationships"}/>
        <Menu.Item name="Teachers" as ={NavLink} to ={"/1/teachers"}/>
        <Menu.Item name="Users" as ={NavLink} to ={"/1/users"}/>
        <Menu.Item name="UserRoles" as ={NavLink} to ={"/1/userRoles"}/>
        <Menu.Item name="Personal Information" as ={NavLink} to ={"/1/userRoles"}/>
      </Menu>
    </div>
  );
}
