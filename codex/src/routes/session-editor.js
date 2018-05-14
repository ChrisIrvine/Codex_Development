import React, { Component } from 'react';
import { Container, Grid, Segment, Button } from 'semantic-ui-react';
import Navigation from '../components/navigation';
import Controls from '../components/control-buttons';
import background from '../images/background.jpg';
import '../App.css';
import Link from 'react-router-dom/Link';

const SessionPlanner = () => (
    <Container>
        <Navigation/>
        <Grid>
            <Grid.Column width={10}>
                <Grid.Row stretched>
                    <Grid columns='equal'>
                        <Grid.Column>
                            <Segment>Session Name</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Session Number</Segment>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    <Segment>Outline</Segment>
                </Grid.Row>
                <Grid.Row>
                    <Segment>Inspiration</Segment>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
                <Grid.Row>
                    <Segment>Session Notes</Segment>
                </Grid.Row>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Button content="Encounter" primary></Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button content="Random" primary></Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button content="Save" primary></Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button content="Cancel" primary></Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button content="Delete" secondary></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid>
    </Container>
)


class App extends Component {
  render() {
    return (
      <div className="page-container">
        <img alt="Background" className="bg-img" src={background}/>
        <SessionPlanner/>
      </div>
    );
  }
}

export default App;
