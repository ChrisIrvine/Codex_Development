import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import '../App.css';

const DMLandingGrid = () => (
    <Grid celled>
        <Grid.Row>
            <Grid.Column width={5}>
                boo!
            </Grid.Column>
            <Grid.Column width={2}>
                <Segment>1</Segment>
                <Segment>2</Segment>
                <Segment>3</Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <DMLandingGrid/>
      </div>
    );
  }
}

export default App;
