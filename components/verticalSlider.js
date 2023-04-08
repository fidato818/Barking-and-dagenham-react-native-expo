import { View, Dimensions, StyleSheet, Image } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.94);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const DATA = [];
for (let i = 0; i < 5; i++) {
  DATA.push(i);
}
const VerticalSlider = (props) => {
  const _renderItem = ({ item }) => {
    return (
      <Card mode="outlined" elevation={3} style={{ margin: 10 }}>
        <View
          style={{
            padding: 10,
            // flex: 1,
            flexDirection: 'row',
            // alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              // alignItems: 'flex-start',
            }}>
            <View>
              <Paragraph
                style={{
                  width: 200,
                  // flex: 1,
                  // flexWrap: 'wrap',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
            </View>

            <View style={styles.reminderView}>
              <Paragraph style={styles.reminderBtn}>30 march</Paragraph>
              <Image
                source={require('../assets/Calender-icon.png')}
                style={{ width: 25, height: 25, marginRight: 5 }}
              />
            </View>
          </View>
          <View>
            <Image
              source={{ uri: 'https://picsum.photos/700' }}
              style={{ width: 210, height: 120 }}
            />
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View>
      <Carousel
        layout={'default'}
        useNativeDriver
        autoplay={true}
        autoplayDelay={3000}
        autoplayInterval={3000}
        // ref={carouselRef}
        data={DATA}
        // sliderWidth={ITEM_WIDTH}
        itemHeight={ITEM_HEIGHT}
        sliderHeight={ITEM_HEIGHT - 100}
        // itemWidth={ITEM_WIDTH + horizontalMargin}
        removeClippedSubviews={true}
        enableMomentum={true}
        // firstItem={currentStoryIndex}
        useScrollView={true}
        vertical={true}
        renderItem={_renderItem}
        decelerationRate={0.9}
        // onSnapToItem={(index) => this.moveToNext(index)}
        onBeforeSnapToItem={(index) => {
          // setCurrentStoryIndex(index);
          // setIsMutedVideo(false);
          // progress.setValue(0);
        }}
      />
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
export default VerticalSlider;
