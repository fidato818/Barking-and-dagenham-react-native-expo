import React, { useState, useEffect } from 'react';
import { Image, View, Dimensions, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
const ScreenWidth = Dimensions.get('window').width;
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.94);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const DATA = [];
for (let i = 0; i < 5; i++) {
  DATA.push(i);
}
const HorizontalSlider = (props) => {
  const [state, setState] = useState({
    arrSwipe: [
      { name: 'About' },
      { name: 'Contact' },
      { name: 'FAQ' },
      { name: 'FAQ' },
    ],
  });
  const { arr, arrSwipe } = state;
  return (
    <View>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop={true}
        index={0}
        showPagination>
        <View
          id="row"
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 40,
            marginTop: 20,
          }}>
          <Card
            mode="outlined"
            elevated={3}
            style={{
              width: ScreenWidth / 3 - 30,
              margin: 10.5,

              // backgroundColor: '#CFD8DC',
            }}>
            <Card.Content>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 35,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/council-tax-icon.png')}
                />
              </View>
              <Text variant="titleLarge" style={{ textAlign: 'center' }}>
                Housing
              </Text>
            </Card.Content>
          </Card>
          <Card
            mode="outlined"
            elevated={3}
            style={{
              width: ScreenWidth / 3 - 30,
              margin: 10.5,

              // backgroundColor: '#CFD8DC',
            }}>
            <Card.Content>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 35,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/Housing-icon.png')}
                />
              </View>
              <Text variant="titleLarge" style={{ textAlign: 'center' }}>
                Housing
              </Text>
            </Card.Content>
          </Card>
          <Card
            mode="outlined"
            elevated={3}
            style={{
              width: ScreenWidth / 3 - 30,
              margin: 10.5,

              // backgroundColor: '#CFD8DC',
            }}>
            <Card.Content>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 35,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/Parking-icon.png')}
                />
              </View>
              <Text variant="titleLarge" style={{ textAlign: 'center' }}>
                Parking
              </Text>
            </Card.Content>
          </Card>
        </View>
        <View
          id="row"
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 40,
            marginTop: 20,
          }}>
          <Card
            mode="outlined"
            elevated={3}
            style={{
              width: ScreenWidth / 3 - 30,
              margin: 10.5,

              // backgroundColor: '#CFD8DC',
            }}>
            <Card.Content>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 35,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/council-tax-icon.png')}
                />
              </View>
              <Text variant="titleLarge" style={{ textAlign: 'center' }}>
                Housing
              </Text>
            </Card.Content>
          </Card>
          <Card
            mode="outlined"
            elevated={3}
            style={{
              width: ScreenWidth / 3 - 30,
              margin: 10.5,

              // backgroundColor: '#CFD8DC',
            }}>
            <Card.Content>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 35,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/Housing-icon.png')}
                />
              </View>
              <Text variant="titleLarge" style={{ textAlign: 'center' }}>
                Housing
              </Text>
            </Card.Content>
          </Card>
          <Card
            mode="outlined"
            elevated={3}
            style={{
              width: ScreenWidth / 3 - 30,
              margin: 10.5,

              // backgroundColor: '#CFD8DC',
            }}>
            <Card.Content>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 35,
                }}>
                <Image
                  style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/Parking-icon.png')}
                />
              </View>
              <Text variant="titleLarge" style={{ textAlign: 'center' }}>
                Parking
              </Text>
            </Card.Content>
          </Card>
        </View>
      </SwiperFlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
});
export default HorizontalSlider;
