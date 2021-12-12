import React from "react";
import { Cookies } from "react-cookie";
import { Dropdown, DropdownMenu, Image, Menu } from "semantic-ui-react";
export default function SignedIn(props) {
  let cookie = new Cookies();
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src={cookie.get("profilePhoto")}
        />
        <Dropdown pointing="top left" text={cookie.get("firstname")}>
          <DropdownMenu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </DropdownMenu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
