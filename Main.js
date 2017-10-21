import React, { Component } from "react";
import { Text } from "react-native";
import {
  Container,
  Button,
  Header,
  Content,
  Form,
  Item,
  Input
} from "native-base";

export default class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button full style={{ marginTop: 20 }}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
