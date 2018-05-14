import React, { Component } from 'react';
import { Container, Grid, Segment, Button } from 'semantic-ui-react';
import Navigation from '../components/navigation';
import Controls from '../components/control-buttons';
import background from '../images/background.jpg';
import '../App.css';

const EncounterPlanner = () => (
    <Container>
        <Navigation/>
        <Grid>
            <Grid.Column width={10}>
                <Grid.Row stretched>
                    <Grid columns='equal'>
                        <Grid.Column>
                            <Segment>Encounter Name</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Encounter Difficulty</Segment>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    <Grid columns='equal'>
                        <Grid.Column>
                            <Segment>Party and Allies</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Enemies</Segment>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    <Segment>Additional Notes</Segment>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
                <Grid.Row>
                    <Segment>Loot</Segment>
                </Grid.Row>
                <Grid columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Button content="View" primary></Button>
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
            <EncounterPlanner/>
        </div>
    );
  }
}

export default App;
