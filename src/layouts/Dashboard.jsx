import React from "react";
import { Cookies } from "react-cookie";
import { Route } from "react-router";
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
