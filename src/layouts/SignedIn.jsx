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
              text="Bilgilerim"
              icon="info"
              as={NavLink}
              to={"/personalInformation"}
            />
            <Dropdown.Item
              onClick={() => (
                cookie.set("roleId", ""),
                cookie.set("adminId", ""),
                cookie.set("profilePhoto", ""),
                cookie.set("studentId", ""),
                cookie.set("teacherId", ""),
                cookie.set("firstname", ""),
                cookie.set("userId", ""),
                sessionStorage.setItem("firstname", ""),
                sessionStorage.setItem("userId", ""),
                history.push("/"),
                window.location.reload()
              )}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </DropdownMenu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
