import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';

const MyComponent = (props ) => {
  return (
    <View>
      <Image
        source={require('../assets/applogo.png')}
        style={styles.sideMenuProfileIcon}
      />
      <Drawer.Item
        style={{ backgroundColor: '#D7CCC8' }}
        icon="format-page-break"
        label="Blog"
      />
      <Drawer.Item
        style={{ backgroundColor: '#D7CCC8' }}
        icon="content-save"
        label="Saved"
      />
      <Drawer.Item
        style={{ backgroundColor: '#D7CCC8' }}
        icon="folder-multiple-outline"
        label="Draft"
      />
      <Drawer.Item
        style={{ backgroundColor: '#D7CCC8' }}
        icon="contacts"
        label="Contact us"
      />
      <Drawer.Item
        style={{ backgroundColor: '#D7CCC8' }}
        icon="file-document-outline"
        label="Term & Privacy"
      />
      <Drawer.Item
        style={{ backgroundColor: '#D7CCC8' }}
        icon="logout"
        label="Logout"
        onPress={(e) => console.log('navigation', props)}
        // onPress={() => navigation}
        // onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    marginTop: 10,
    // borderRadius: 100 / 2,
    alignSelf: 'center',
  },

});
export default MyComponent;
