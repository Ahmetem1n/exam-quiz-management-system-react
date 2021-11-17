import React from 'react'
import { Grid, Menu,Segment, } from 'semantic-ui-react'

export default function Menus() {
    return (
        <div>
            <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='bio'
            />
            <Menu.Item
              name='pics'
            />
            <Menu.Item
              name='companies'
            />
            <Menu.Item
              name='links'
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
        </div>
    )
}
