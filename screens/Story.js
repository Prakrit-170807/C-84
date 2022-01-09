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
  TouchableOpacity,
  ScrollView
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Speech from "expo-speech"

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
  "MoonDance" : require("../assets/fonts/MoonDance-Regular.ttf")
};

export default class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      speakerColor: "gray",
      speakerIcon: "volume-high-outline"
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  async speak(title,author,story,moral){
    const speck_col = this.state.speakerColor
    this.setState({ speakerColor: speck_col == "gray" ? "tomato" : "gray"});
    if (speck_col == "gray"){
        Speech.speak("this.props.route.params.story.story")
        Speech.speak(`${title} this story is written by${author}`)
        Speech.speak("Here goes the story")
        Speech.speak(`${story} The moral of todays story is ${moral}`)
    }
    else{
        Speech.stop()
    }
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Storytelling App</Text>
          </View>
        </View>
        <View style={styles.storyContainer}>
          <ScrollView style={styles.storyCard}>
            <Image
              source={require("../assets/story_image_1.png")}
              style={styles.image}
            ></Image>
            <View style={styles.dataContainer}>
              <View style={styles.titleTextContainer}>
                <Text style={styles.storyTitleText}>
                  {this.props.route.params.story.title}
                </Text>
                <Text style={styles.storyAuthorText}>
                  {this.props.route.params.story.author}
                </Text>
                <Text style={styles.storyAuthorText}>
                  {this.props.route.params.story.created_on}
                </Text>
              </View>
              <TouchableOpacity style={styles.iconContainer} onPress={()=> this.speak (this.props.route.params.story.title, this.props.route.params.story.author, this.props.route.params.story.story, this.props.route.params.story.moral)}>
                <Ionicons
                  name={this.state.speakerIcon}
                  size={RFValue(30)}
                  color={this.state.speakerColor}
                  style={{ margin: RFValue(15) }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.storyTextContainer}>
              <Text style={styles.storyText}>
                {this.props.route.params.story.story}
              </Text>
              <Text style={styles.moralText}>
                Moral - {this.props.route.params.story.moral}
              </Text>
            </View>
          </ScrollView>
        </View>
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