import * as React from 'react';
import { Appbar } from 'react-native-paper';

const HomePage = (props) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Action
        icon="menu"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Appbar.Content title="Settings" />
    </Appbar.Header>
  );
};

export default HomePage;
