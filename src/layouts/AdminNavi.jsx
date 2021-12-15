import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";

export default function Navi(params) {
  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item name="Ana Sayfa" as={NavLink} to={"/"} />
        <Menu.Item name="Admins" as={NavLink} to={"/admins"} />
        <Menu.Item name="Department" as={NavLink} to={"/departments"} />
        <Menu.Item name="Exams" as={NavLink} to={"/exams"} />
        <Menu.Item name="Faculties" as={NavLink} to={"/faculties"} />
        <Menu.Item name="Lessons" as={NavLink} to={"/lessons"} />
        <Menu.Item name="Questions" as={NavLink} to={"/questions"} />
        <Menu.Item
          name="QuestionStudents"
          as={NavLink}
          to={"/questionStudents"}
        />
        <Menu.Item name="Students" as={NavLink} to={"/students"} />
        <Menu.Item
          name="StudentLessonRelationships"
          as={NavLink}
          to={"/studentLessonRelationships"}
        />
        <Menu.Item name="Teachers" as={NavLink} to={"/teachers"} />
        <Menu.Item name="Users" as={NavLink} to={"/users"} />
        <Menu.Item name="UserRoles" as={NavLink} to={"/userRoles"} />
        <Menu.Item
          name="Personal Information"
          as={NavLink}
          to={"/personalInformation"}
        />

        <Menu.Menu position="right">
          <SignedIn />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
