import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//pages
import Splashcreen from "../pages/Splash";
import LoginScreen from "../pages/login";
import SignupScreen from "../pages/signup";
import { Drawer } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
//Stacks
import BottomNav from "./BottomNav";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();

const DrawerStack = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />* */}
      <Image
        source={require("../assets/applogo.png")}
        style={styles.sideMenuProfileIcon}
      />
      <Drawer.Item
        style={{ backgroundColor: "#D7CCC8" }}
        icon="format-page-break"
        label="Blog"
      />
      <Drawer.Item
        style={{ backgroundColor: "#D7CCC8" }}
        icon="content-save"
        label="Saved"
      />
      <Drawer.Item
        style={{ backgroundColor: "#D7CCC8" }}
        icon="folder-multiple-outline"
        label="Draft"
      />
      <Drawer.Item
        style={{ backgroundColor: "#D7CCC8" }}
        icon="contacts"
        label="Contact us"
      />
      <Drawer.Item
        style={{ backgroundColor: "#D7CCC8" }}
        icon="file-document-outline"
        label="Term & Privacy"
      />
      <Drawer.Item
        style={{ backgroundColor: "#D7CCC8" }}
        icon="logout"
        label="Logout"
        onPress={() => props.navigation.navigate("Login")}
        // onPress={() => navigation}
        // onPress={() => navigation.navigate('Login')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavi = (props) => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      useLegacyImplementation
      // drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
    >
      <DrawerStack.Screen name="Main" component={BottomNav} />
    </DrawerStack.Navigator>
  );
};

const LoginStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        // header: (props) => <CustomNavigationBar {...props} />,
      }}
    >
      <Stack.Screen name="Splash" component={Splashcreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavi} />
    </Stack.Navigator>
  );
};
const MainNavigator = (props) => {
  // const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    marginTop: 10,
    // borderRadius: 100 / 2,
    alignSelf: "center",
  },
});
export default MainNavigator; 
