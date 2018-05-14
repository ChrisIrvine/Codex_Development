import React, { Component } from 'react';
import { Icon, Button, Header, Grid, Segment, Container } from 'semantic-ui-react';
import background from '../images/background.jpg';
import Navigation from '../components/navigation.js';
import ControlButtons from '../components/control-buttons.js';
import '../App.css';

const DMLandingGrid = () => (
    <Container className="content-grid">
        <Navigation/>
        <Grid celled>
            <Grid.Column className="standard-colors campaigns">
                <Grid.Row>
                    <Grid className="standard-colors" className="campaign-1">
                        <Grid.Column width={13}>
                            Campaign 1 Title
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <ControlButtons/>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    <Grid className="campaign-2">
                        <Grid.Column width={13}>
                            Campaign 2 Title
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <ControlButtons/>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    <Grid className="campaign-3">
                        <Grid.Column width={13}>
                            Campaign 3 Title
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <ControlButtons/>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column className="standard-colors controlls">
                <Grid.Row>
                    <Grid className="">
                        <Grid.Column width={13}>
                            Selected Campaign Details
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <ControlButtons/>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    <Grid className="details">
                        <Grid.Column width={8}>
                            <Segment>Campaign Name</Segment>
                            <Segment>Homebrew/Premade</Segment>
                            <Segment>Campaign Setting</Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>Campaign Style</Segment>
                            <Segment>Number of Players</Segment>
                            <Segment compact><Button>Create Campaign</Button></Segment>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Grid.Column>
        </Grid>
    </Container>
)

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <img alt="Background" className="bg-img" src={background}/>
        <DMLandingGrid/>
      </div>
    );
  }
}

export default App;
