import React from "react";
import { Image } from "react-native";
import timer from "react-native-timer";

class Home extends React.Component {
  componentWillMount() {
    timer.setTimeout("loader", () => this.props.history.push("/login"), 2000);
  }

  render() {
    console.log("render");
    return (
      <Image
        style={{ flex: 1 }}
        source={{
          uri:
            "http://napasdailygrowl.com/wp-content/uploads/2015/01/photodune-9642744-animals-little-dog-cute-puppy-pet-outdoor-xs.jpg"
        }}
      />
    );
  }
}

export default Home;
