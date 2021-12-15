import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";

export default function Navi(params) {
  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item name="Ana Sayfa" as={NavLink} to={"/"} />
        <Menu.Item name="Exams" as={NavLink} to={"/exams"} />
        <Menu.Item name="Lessons" as={NavLink} to={"/lessons"} />
        <Menu.Item name="Teachers" as={NavLink} to={"/teachers"} />
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
