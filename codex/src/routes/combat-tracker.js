import React, { Component } from 'react';
import { Header, Grid, Segment, Button, Icon, Container } from 'semantic-ui-react';
import Navigation from '../components/navigation.js';
import ControlButtons from '../components/control-buttons.js';
import background from '../images/background.jpg';
import connection from '../components/mysql';
import '../App.css';

const CombatGrid = () => (
    <Container className="content-grid">
        <Navigation/>
        <Grid>
            <Grid.Row>
                <Grid.Column width={11}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Segment>Name</Segment>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Segment>HP/MaxHP</Segment>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button><Icon name='plus' /></Button>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button><Icon name='minus' /></Button>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Segment>AC</Segment>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Segment>Conidtions and Status</Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Segment>Character Stats</Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <Grid columns={3} divided>
            <Grid.Row stretched>
                <Grid.Column>
                    <Button>Browse Spellbook</Button>
                </Grid.Column>
                <Grid.Column>
                    <Button>Finish Combat</Button>
                </Grid.Column>
                <Grid.Column>
                    <Button>Cancel</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
)

class App extends Component {
    render () {
        return (
            <div className="page-container">
                <img alt="Background" className="bg-img" src={background}/>
                <CombatGrid/>
            </div>
        );
    }
}

export default App;