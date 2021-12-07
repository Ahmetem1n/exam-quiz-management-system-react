import React from "react";
import { Menu } from "semantic-ui-react";

export default function Menus() {
  return (
    <div>
      <Menu fluid vertical tabular>
        <Menu.Item name="bio" />
        <Menu.Item name="pics" />
        <Menu.Item name="companies" />
        <Menu.Item name="links" />
      </Menu>
    </div>
  );
}
