import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import '../App.css';

const ControlButtons = () => (
    <Container>
        <Button icon>
            <Icon name="search"/>
        </Button>
        <Button icon>
            <Icon name="edit"/>
        </Button>
        <Button icon>
            <Icon name="delete"/>
        </Button>
    </Container>
)

export default ControlButtons;