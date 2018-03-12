import React, { Component } from 'react';
import { Grid, Input, Segment, Button, Divider } from 'semantic-ui-react'
import './App.css';

const Account = () => (
  <Segment padded>
    <Input fluid placeholder="Username"/>
    <Divider hidden/>
    <Input fluid placeholder="Password"/>
    <Grid columns={2} relaxed>
      <Grid.Column>
        <Segment basic>
          <Button primary fluid>Login</Button>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <Button primary fluid>Reset Password</Button>
        </Segment>
      </Grid.Column>
    </Grid>
    <Divider horizontal>Or</Divider>
    <Button secondary fluid>Sign Up Now</Button>
  </Segment>
)

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="header">
          <div className="login-container">
            <h1 className="app-title">Welcome, Dungeon Master, to your Codex!</h1>
            <Account/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
