import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { StatusBar, AppState, LogBox, Alert, BackHandler } from "react-native";
import AppNavigator from "./config/navigations";

import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { enableScreens } from "react-native-screens";
import SplashScreen from "./pages/Splash";
enableScreens();
console.disableYellowBox = true;
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#607D8B",
    accent: "#f1c40f",
  },
};
LogBox.ignoreAllLogs();
const App = () => {
  const appState = useRef(AppState.currentState);
  const [outOfApp, setOutOfApp] = useState(true);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useLayoutEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);

      appStateChangeListener(appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  const appStateChangeListener = (val) => {
    if (val == "active") {
      setTimeout(() => {
        setOutOfApp(false);
      }, 1500);
      //val will be "active" only when app is in foreground
      // use navigation to navigate to Splashscreen
    } else {
      setOutOfApp(true);
    }
  };

  // const expensiveValue = useMemo(() => [outOfApp]);

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      // Alert.alert("Hold on!", "Are you sure you want to close app?", [
      //   {
      //     text: "Cancel",
      //     onPress: () => null,
      //     style: "cancel",
      //   },
      //   { text: "YES", onPress: () => BackHandler.exitApp() },
      // ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  if (outOfApp) {
    return appStateVisible === "active" ? <SplashScreen /> : "";
  } else {
    return (
      <PaperProvider theme={theme}>
        <StatusBar
          hidden={false}
          translucent={true}
          // backgroundColor={styles.headerColor}
          barStyle="light-content"
        />
        <AppNavigator />
      </PaperProvider>
    );
  }
};

export default App;
