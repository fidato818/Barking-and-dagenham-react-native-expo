import React, { useState } from "react";

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

import { TextInput, Button, Provider, Snackbar } from "react-native-paper";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginPage = (props) => {
  const [state, setState] = useState({
    open: false,
    visibleSnackbar: false,
    errorInputs: false,
    isSwitchOn: false,
    toggleChange: false,
    showPassword: false,
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
                <TextInput mode="outlined" label="Email" />

                <TextInput
                  mode="outlined"
                  label="Password"
                  secureTextEntry
                  right={<TextInput.Icon icon="eye" />}
                />

                <Button
                  onPress={() => props.navigation.navigate("Drawer")}
                  color="#603F83FF"
                  mode="contained"
                  style={{ marginTop: 16 }}
                >
                  Submit
                </Button>

                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Signup")}
                >
                  <Text
                    style={{
                      margin: 10,
                      textAlign: "center",
                      color: "grey",
                    }}
                  >
                    Don't Have a account? Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
      <Snackbar
        style={{
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

export default LoginPage;
