import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';

import logo from './assets/logo.png';

class Login extends Component {
  goRoom() {}

  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src={logo} /> Connect to Board
            </Header>
            <Form size="large">
              <Segment>
                <Form.Input
                  fluid
                  icon="clipboard outline"
                  iconPosition="left"
                  placeholder="User Name"
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => this.onLogin()}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Login);
