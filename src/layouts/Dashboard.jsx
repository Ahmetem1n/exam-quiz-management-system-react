import React from "react";
import { Route, useParams } from "react-router";
import { Grid } from "semantic-ui-react";
import UserLogin from "../pages/AdminPages/User/UserLogin";
import AdminMenus from "./AdminMenus";
import AdminRoute from "./AdminRoute";
import StudentMenus from "./StudentMenus";
import StudentRoute from "./StudentRoute";
import TeacherMenus from "./TeacherMenus";
import TeacherRoute from "./TeacherRoute";

export default function Dashboard() {
  let { roleId } = useParams();
  roleId = 1;
  return (
    <div>
      <Grid>
        <Grid.Column width={3}>
          <Route exact path="/" component={UserLogin} />
          <Route path="/1" component={AdminMenus} />
          <Route path="/2" component={TeacherMenus} />
          <Route path="/3" component={StudentMenus} />
        </Grid.Column>
        <Grid.Column stretched width={13}>
          <Route path="/1" component={AdminRoute} />
          <Route path="/2" component={TeacherRoute} />
          <Route path="/3" component={StudentRoute} />
        </Grid.Column>
      </Grid>
    </div>
  );
}
