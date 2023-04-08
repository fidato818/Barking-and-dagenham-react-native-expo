import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  AppState,
} from "react-native";

const Splash = (props) => {
  return (
    <ImageBackground
      source={require("../assets/snack-icon.png")}
      style={styles.backgroundImage}
    >
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              flex: 1,
              width: "70%",
              height: "70%",
              resizeMode: "contain",
            }}
            source={require("../assets/applogo.png")}
          />
        </View>

        <View style={styles.bottomView}>
          <Text style={styles.textStyle}></Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  // bottom: {
  //   // justifyContent: 'flex-end',
  //   marginBottom: 20,
  // },
  bottomView: {
    width: "100%",
    height: 50,

    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  textStyle: {
    // fontFamily: "ubuntu-regular",
    fontSize: 16,
    color: "teal",
  },
});
