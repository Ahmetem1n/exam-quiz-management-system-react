import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function StudentMenus() {
  return (
    <div>
      <Menu fluid vertical tabular>
        <Menu.Item name="Exams" as={NavLink} to={"/3/exams"} />
        <Menu.Item name="Lessons" as={NavLink} to={"/3/lessons"} />
        <Menu.Item name="Personal Information" as ={NavLink} to ={"/3/userRoles"}/>
      </Menu>
    </div>
  );
}
