import React from "react";
import { Cookies } from "react-cookie";
import { NavLink, useHistory } from "react-router-dom";
import { Dropdown, DropdownMenu, Image, Menu } from "semantic-ui-react";
export default function SignedIn() {
  let cookie = new Cookies();
  const history = useHistory();
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src={cookie.get("profilePhoto")} />
        <Dropdown pointing="top left" text={cookie.get("firstname")}>
          <DropdownMenu>
            <Dropdown.Item
              text="Personal Information"
              icon="info"
              as={NavLink}
              to={"/personalInformation"}
            />
            <Dropdown.Item
              onClick={() => (
                document.cookie.split(";").forEach(function (c) {
                  document.cookie = c
                    .replace(/^ +/, "")
                    .replace(
                      /=.*/,
                      "=;expires=" + new Date().toUTCString() + ";path=/"
                    );
                }),
                sessionStorage.clear(),
                history.push("/"),
                window.location.reload()
              )}
              text="Sign out"
              icon="sign-out"
            />
          </DropdownMenu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
