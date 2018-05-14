import React, { Component } from 'react';
import { Image, Icon, Button, Header, Grid, Segment, Container, GridColumn } from 'semantic-ui-react';
import background from '../images/background.jpg';
import portrait from '../images/character-portrait.jpg';
import Navigation from '../components/navigation.js';
import ControlButtons from '../components/control-buttons.js';
import '../App.css';

const PlayerLandingGrid = () => (
    <Container>
        <Grid columns={2}>
            <Grid.Column width={3}>
                <Grid.Row>
                    <img alt="Character Portrait" className="char-por" src={portrait}/>
                </Grid.Row>
                <Grid.Row>
                    <Segment>Character Items and Inventory</Segment>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width={7}>
                <Grid.Row>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment className="box">Dozer Blazer</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment className="box">Rogue - 9</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment className="box">Homebrew Awesome</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment className="box">Urchin - LG</Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Row>
                <Grid.Row>
                    <Segment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend est sem, id gravida lorem lobortis vel. Ut egestas leo sed nunc ultricies tempor. Nulla euismod est ac leo aliquet, quis ultricies sapien accumsan. Etiam facilisis quam a lacinia porttitor. Aliquam iaculis venenatis ipsum vel posuere. Ut auctor vestibulum lorem commodo efficitur. Etiam nec vestibulum arcu. Ut pulvinar magna non eros tempus, vitae convallis turpis hendrerit. Cras mattis, tellus imperdiet auctor maximus, est sem pharetra nisi, nec commodo felis mi a ipsum. Quisque interdum felis sapien, at lacinia tellus feugiat non. In interdum est non lorem aliquam, ac cursus orci fringilla. In ut molestie nunc. Phasellus ut tortor eu est lobortis dapibus. Curabitur quis nulla ullamcorper velit convallis vehicula. Etiam nec nisl sed enim aliquam mattis sit amet vitae ex. Donec congue magna id neque fermentum consequat.

Maecenas nec lacus ut elit rutrum auctor vel quis ipsum. Nam elementum egestas tellus eget ultricies. Duis ac dui sit amet nisi tempus malesuada non eget enim. Pellentesque auctor at nulla vel lacinia. Sed sed magna vitae ligula vulputate lobortis quis eget lorem. Nunc malesuada lacus non odio commodo, sit amet iaculis enim rhoncus. Pellentesque rhoncus ante eu tempus ultricies. Morbi id tincidunt.</Segment>
                </Grid.Row>
                <Grid.Row>
                    <Grid columns='equal'>
                        <Grid.Column>
                            <Grid.Row>
                                <Segment className="box">STR = 11</Segment>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment className="box">DEX = 18</Segment>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <Segment className="box">CON = 14</Segment>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment className="box">CHA = 16</Segment>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <Segment className="box">WIS = 8</Segment>
                            </Grid.Row>
                            <Grid.Row>
                                <Segment className="box">INT = 14</Segment>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <Button icon>
                                    <Icon name="search"/>
                                </Button>
                            </Grid.Row>
                            <Grid.Row>
                                <Button icon>
                                    <Icon name="edit"/>
                                </Button>
                            </Grid.Row>
                            <Grid.Row>
                                <Button icon>
                                    <Icon name="delete"/>
                                </Button>
                            </Grid.Row>
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
          <Navigation/>
          <PlayerLandingGrid/>
        </div>
      );
    }
  }
  
  export default App;
  