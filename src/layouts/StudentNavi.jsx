import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";

export default function Navi(params) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item name="Ana Sayfa" as={NavLink} to={"/3"} />
        <Menu.Item name="Exams" as={NavLink} to={"/3/exams"} />
        <Menu.Item name="Lessons" as={NavLink} to={"/3/lessons"} />
        <Menu.Item
          name="Personal Information"
          as={NavLink}
          to={"/33/userRoles"}
        />

        <Menu.Menu position="right">
          <SignedIn signOut={handleSignOut} />
        </Menu.Menu>
      </Menu>
    </div>
  );
}
