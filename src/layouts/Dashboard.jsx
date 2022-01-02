import React from "react";
import { Cookies } from "react-cookie";
import { Route } from "react-router";
import { useHistory } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import AdminMenus from "./AdminMenus";
import AdminRoute from "./AdminRoute";
import StudentMenus from "./StudentMenus";
import StudentRoute from "./StudentRoute";
import TeacherMenus from "./TeacherMenus";
import TeacherRoute from "./TeacherRoute";
import UserLogin from "./UserLogin";

export default function Dashboard() {
  let cookie = new Cookies();
  const history = useHistory();
  if (cookie.get("remember") === "true") {
    if (cookie.get("roleId") == 1) {
      return (
        <div>
          <Grid>
            <Grid.Column width={3}>
              <Route path="/" component={AdminMenus} />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Route path="/" component={AdminRoute} />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else if (cookie.get("roleId") == 2) {
      return (
        <div>
          <Grid>
            <Grid.Column width={3}>
              <Route path="/" component={TeacherMenus} />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Route path="/" component={TeacherRoute} />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else if (cookie.get("roleId") == 3) {
      return (
        <div>
          <Grid>
            <Grid.Column width={3}>
              <Route path="/" component={StudentMenus} />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Route path="/" component={StudentRoute} />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else {
      history.push("/");
      return (
        <div>
          <Grid padded>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column color="blue" width={6}>
              <Route path="/" component={UserLogin} />
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid>
        </div>
      );
    }
  } else {
    if (sessionStorage.getItem("roleId") == 1) {
      return (
        <div>
          <Grid>
            <Grid.Column width={3}>
              <Route path="/" component={AdminMenus} />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Route path="/" component={AdminRoute} />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else if (sessionStorage.getItem("roleId") == 2) {
      return (
        <div>
          <Grid>
            <Grid.Column width={3}>
              <Route path="/" component={TeacherMenus} />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Route path="/" component={TeacherRoute} />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else if (sessionStorage.getItem("roleId") == 3) {
      return (
        <div>
          <Grid>
            <Grid.Column width={3}>
              <Route path="/" component={StudentMenus} />
            </Grid.Column>
            <Grid.Column stretched width={13}>
              <Route path="/" component={StudentRoute} />
            </Grid.Column>
          </Grid>
        </div>
      );
    } else {
      document.cookie.split(";").forEach(function (c) {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(
            /=.*/,
            "=;expires=" + new Date().toUTCString() + ";path=/"
          );
      })
      history.push("/");
      return (
        <div>
          <Grid padded>
            <Grid.Column width={5}></Grid.Column>
            <Grid.Column color="blue" width={6}>
              <Route path="/" component={UserLogin} />
            </Grid.Column>
            <Grid.Column width={5}></Grid.Column>
          </Grid>
        </div>
      );
    }
  }
}
