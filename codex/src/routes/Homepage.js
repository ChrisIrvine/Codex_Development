import React, { Component } from 'react';
import { Header, Grid, Input, Segment, Button, Divider } from 'semantic-ui-react';
import background from '../images/background.jpg';
import '../App.css';
import Link from 'react-router-dom/Link';



const Account = () => (
  <Segment padded>
    <Header as='h1' className="app-title">Welcome, Dungeon Master, to your Codex!</Header>
    <Input fluid placeholder="Username"/>
    <Divider hidden/>
    <Input fluid placeholder="Password"/>
    <Grid columns={2} relaxed>
      <Grid.Column>
        <Segment basic>
          <Link to={'/login'}><Button primary fluid>Login</Button></Link>
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment basic>
          <Link to={'/reset-password'}><Button primary fluid>Reset Password</Button></Link>
        </Segment>
      </Grid.Column>
    </Grid>
    <Divider horizontal>Or</Divider>
    <Link to={'/create-account'}><Button secondary fluid>Sign Up Now</Button></Link>
  </Segment>
)


class App extends Component {
  render() {
    return (
      <div className="page-container">
        <img alt="Background" className="bg-img" src={background}/>
        <div className="header">
          <div className="login-container">
            <Account/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
