import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

import {
  Card,
  Text,
  Searchbar,
  Paragraph,
  Appbar,
  Title,
  Surface,
} from "react-native-paper";

import VerticalSlider from "../components/verticalSlider";
import HorizontalSlider from "../components/horizontalSlider";

const HomePage = (props) => {
  const [state, setState] = useState({
    arr: [{ name: "About" }, { name: "Contact" }, { name: "FAQ" }],
    arrImage: [
      { name: "Payment", image: require("../assets/Payment-icon.png") },
      { name: "Report", image: require("../assets/Report-icon.png") },
      { name: "Services", image: require("../assets/Services-icon.png") },
    ],
  });

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const { arr, arrImage } = state;
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => props.navigation.toggleDrawer()}
        />
        <Appbar.Content title="Barking & Dagenham" />
      </Appbar.Header>
      <SafeAreaView style={styles.containerSafeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View
              style={{
                marginTop: 10,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              {arr.map((ev, i) => {
                return (
                  <Card
                    key={i}
                    elevated={3}
                    style={{
                      width: "30%",

                      // margin: 10,
                    }}
                  >
                    <Card.Content>
                      <Text
                        variant="titleLarge"
                        style={{ textAlign: "center" }}
                      >
                        {ev.name}
                      </Text>
                    </Card.Content>
                  </Card>
                );
              })}
            </View>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>

            <View style={styles.mainContainer}>
              <HorizontalSlider />
            </View>
            <View style={styles.mainContainer}>
              <Surface elevation={3}>
                <Title style={{ textAlign: "center" }}>News</Title>
                <VerticalSlider />
              </Surface>
            </View>

            <View
              style={{
                marginTop: 10,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              {arrImage.map((ev, i) => {
                return (
                  <View
                    key={i}
                    mode="outlined"
                    elevated={3}
                    style={{
                      width: "30%",
                      justifyContent: "center",
                      alignItems: "center",

                      // margin: 10,
                    }}
                  >
                    <View
                      style={{
                        border: 10,
                        borderColor: "black",
                        borderRadius: 5,
                        padding: 20,
                        borderWidth: 1,
                      }}
                    >
                      <Image
                        source={ev.image}
                        style={{ width: 80, height: 80, marginRight: 5 }}
                      />
                    </View>
                    <Text
                      variant="titleLarge"
                      style={{ textAlign: "center", marginTop: 10 }}
                    >
                      {ev.name}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "#E0E0E0", marginTop: 8 },
  containerSafeArea: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginBottom: 160,
  },
  reminderView: {
    flex: 1,
    right: 0,
    // margin: 5,
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
  },

  reminderBtn: {
    // fontSize: 50,
    // margin: 5,
    alignSelf: "flex-end",
    marginRight: 5,
  },
});

export default HomePage;
