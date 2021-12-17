import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function StudentMenus() {
  return (
    <div>
      <Menu fluid vertical tabular>
        <Menu.Item name="Exams" as={NavLink} to={"/exams"} />
        <Menu.Item name="Exam Results" as={NavLink} to={"/examResults"} />
        <Menu.Item name="Lessons" as={NavLink} to={"/lessons"} />
        
        <Menu.Item name="Teachers" as={NavLink} to={"/teachers"} />
        <Menu.Item
          name="Personal Information"
          as={NavLink}
          to={"/personalInformation"}
        />
      </Menu>
    </div>
  );
}
