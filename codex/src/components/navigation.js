import React from 'react';
import { Grid, Header, Button, Icon } from 'semantic-ui-react';
import '../App.css';

const Navigation = () => (
    <Grid>
        <Grid.Column width={13}>
            <Header as='h1' className="standard-colors page-title">[Username]</Header>
        </Grid.Column>
        <Grid.Column>
            <Button icon>
                <Icon name="help circle"/>
            </Button>
        </Grid.Column>
        <Grid.Column>
            <Button icon>
                <Icon name="compass"/>
            </Button>
        </Grid.Column>
        <Grid.Column>
            <Button icon>
                <Icon name="setting"/>
            </Button>
        </Grid.Column>
    </Grid>
)

export default Navigation;