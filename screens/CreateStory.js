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
  ScrollView,
  TextInput,
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";

let customFonts = {
  "chalkboard": require("../assets/fonts/Chalkboard.ttf"),
  "MoonDance": require("../assets/fonts/MoonDance-Regular.ttf")
};
export default class CreateStory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      stateholder: "Image1"
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
    }
    else {
      let imageslst = {
        "Image1": require("../assets/story_image_1.png"),
        "Image2": require("../assets/story_image_2.png"),
        "Image3": require("../assets/story_image_3.png"),
        "Image4": require("../assets/story_image_4.png"),
        "Image5": require("../assets/story_image_5.png")
      }
      return (
        <View style={styles.container}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/maillogo.png")}
                style={styles.iconImage}
              ></Image>
              <Text style={styles.appTitleText}>Creat A new Story</Text>
            </View>
            <ScrollView >
              <Image source={imageslst[this.state.stateholder]} style={styles.previewImage} />
              <View >
                <DropDownPicker items={[
                  {label: 'Image1', value: 'Image1'},
                  {label: 'Image2', value: 'Image2'},
                  {label: 'Image3', value: 'Image3'}, 
                  {label: 'Image4', value: 'Image4'},
                  {label: 'Image5', value: 'Image5'} 
                ]} labelStyle={{color: 'white',}}
                defaultValue={ this.state.stateholder} 
                style = {{backgroundColor:"transparent"}}
                dropDownStyle = {{backgroundColor:"#15193c"}}
                onChangeItem={item => this.setState({stateholder:item.value})}/>
              </View>
              <TextInput
                style={[styles.inputFont,styles.inputFontExtra,
                  styles.inputTextBig]}
                onChangeText={title => this.setState({ title })}
                placeholder={"Title"}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={description => this.setState({ description })}
                placeholder={"Description"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={story => this.setState({ story })}
                placeholder={"Story"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />

              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig
                ]}
                onChangeText={moral => this.setState({ moral })}
                placeholder={"Moral of the story"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
            </ScrollView>
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
    fontSize: RFValue(25),
    fontFamily: "chalkboard",
    marginTop: 20,
  },
  cardContainer: {
    flex: 0.93
  },
  storyAuthorText:
  {
    fontSize: RFValue(18),
    fontFamily: 'MoonDance',
    color: 'white',
  },
  descriptionText:
  {
    fontFamily: 'MoonDance',
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(1),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Moon-Dance"
  },
  inputFontExtra: {
    marginTop: RFValue(10)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  }
});

