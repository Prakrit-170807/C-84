import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  "MoonDance" : require("../assets/fonts/MoonDance-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (

        <View>
          <View style={styles.container}>
            <Text style={{ color: "white" }}>Story Card!</Text>
          </View>
          <TouchableOpacity style={styles.container} onPress={()=> {this.props.navigation.navigate("Stories", {story:this.props.story})}}>
            <Image source = {require('../assets/story_image_1.png')} />
            <Text style = {styles.appTitleText}>{this.props.story.title}</Text>
            <Text style = {styles.storyAuthorText}>{this.props.story.author}</Text>
            <Text style = {styles.descriptionText}>{this.props.story.description}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  },
  storyAuthorText: 
  { fontSize: RFValue(18), 
    fontFamily: 'MoonDance', 
    color: 'white', 
  }, 
  descriptionText: 
  { fontFamily: 'MoonDance', 
  fontSize: 13, 
  color: 'white', 
  paddingTop: RFValue(10), 
}
});

