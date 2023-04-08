import React, { Component, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

import {
  TextInput,
  Button,
  FAB,
  Portal,
  Provider,
  Constants,
  Snackbar,
  IconButton,
  Appbar,
  Switch,
  Colors,
} from "react-native-paper";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignupPage = (props) => {
  const [state, setState] = useState({
    open: false,
    visibleSnackbar: false,
    errorInputs: false,
    isSwitchOn: false,
    toggleChange: false,
  });

  return (
    <Provider style={{ backgroundColor: "grey", flex: 1 }}>
      <ScrollView
      // style={styles.scrollView}
      // contentContainerStyle={{ flexGrow: 1 }}
      >
        <KeyboardAwareScrollView
          // extraScrollHeight={10}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          // style={{ backgroundColor: 'teal' }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          // contentContainerStyle={styles.container}
          scrollEnabled={false}
        >
          <View
            style={{
              flex: 1,
              // justifyContent: 'flex-start',
              // marginBottom: 170,
              paddingBottom: 10,
              // backgroundColor: 'grey',
            }}
          >
            <View>
              <Image
                source={require("../assets/applogo.png")}
                style={styles.sideMenuProfileIcon}
              />
              <View style={{ margin: 10 }}>
                <TextInput
                  mode="outlined"
                  theme={{
                    colors: {
                      // placeholder: 'white',
                      // text: 'white',
                      primary: "#3526a5",
                      underlineColor: "transparent",
                      // background: '#003489',
                    },
                  }}
                  label="Full Name"
                />
                <TextInput
                  mode="outlined"
                  theme={{
                    colors: {
                      // placeholder: 'white',
                      // text: 'white',
                      primary: "#3526a5",
                      underlineColor: "transparent",
                      // background: '#003489',
                    },
                  }}
                  label="Email"
                  // onChangeText={() => handleChange("email")}
                  // onBlur={props.handleBlur('email')}
                  // value={props.values.email}
                  // autoFocus
                  // style={styles.input}
                />

                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <TextInput
                    mode="outlined"
                    theme={{
                      colors: {
                        // placeholder: 'white',
                        // text: 'white',
                        primary: "#3526a5",
                        underlineColor: "transparent",
                        // background: '#003489',
                      },
                    }}
                    label="Confirm Password"
                    type="password"
                    // onChangeText={() => handleChange("password")}
                    secureTextEntry={!state.showPassword ? true : false}
                    // autoFocus
                    // style={styles.input}
                  />
                  <IconButton
                    style={{
                      position: "absolute",
                      right: 5,
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                    icon={!state.showPassword ? "eye-off" : "eye"}
                    color={Colors.black500}
                    size={25}
                    onPress={() =>
                      setState({
                        showPassword: !state.showPassword,
                      })
                    }
                  />
                </View>
                <View
                  style={{
                    position: "relative",
                  }}
                >
                  <TextInput
                    mode="outlined"
                    theme={{
                      colors: {
                        // placeholder: 'white',
                        // text: 'white',
                        primary: "#3526a5",
                        underlineColor: "transparent",
                        // background: '#003489',
                      },
                    }}
                    label="Password"
                    type="password"
                    // onChangeText={() => handleChange("password")}
                    secureTextEntry={!state.showPassword ? true : false}
                    // autoFocus
                    // style={styles.input}
                  />
                  <IconButton
                    style={{
                      position: "absolute",
                      right: 5,
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                    icon={!state.showPassword ? "eye-off" : "eye"}
                    color={Colors.black500}
                    size={25}
                    onPress={() =>
                      setState({
                        showPassword: !state.showPassword,
                      })
                    }
                  />
                </View>

                <Button
                  onPress={() => props.navigation.navigate("Login")}
                  // onPress={props.handleSubmit}
                  // color="#C7D3D4FF"
                  color="#603F83FF"
                  mode="contained"
                  // loading={state.isSubmitting}
                  // disabled={state.isSubmitting}
                  style={{ marginTop: 16 }}
                >
                  Submit
                </Button>

                <TouchableOpacity
                  // disabled={state.isSubmitting}
                  onPress={() => props.navigation.navigate("Login")}
                >
                  <Text
                    style={{
                      margin: 10,
                      textAlign: "center",
                      color: "grey",
                      // fontFamily: "Comfortaa-Regular",
                    }}
                  >
                    Already Account? Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <Snackbar
        style={{
          // fontFamily: "Comfortaa-Regular",
          backgroundColor: "#603F83FF",
        }}
        visible={state.visibleSnackbar}
        onDismiss={() => setState({ visibleSnackbar: false })}
        duration={1500}
        action={{
          label: "",
          onPress: () => {
            // Do something
          },
        }}
      >
        Login successfully
      </Snackbar>
    </Provider>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    backgroundColor: "transparent",
    height: 55,
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 200,
    height: 200,
    marginTop: 80,
    // borderRadius: 100 / 2,
    alignSelf: "center",
  },
});

export default SignupPage;
