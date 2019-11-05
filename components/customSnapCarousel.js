import React, { memo } from "react";
import { Platform, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { ENTRIES1, ENTRIES2 } from "../examples/SnapCarousel/entries";
import { scrollInterpolators, animatedStyles } from "../utils/animation";
import { sliderWidth, itemWidth } from "../styles/sliderEntry.style";
import styles from "../styles/index.style";

const IS_ANDROID = Platform.OS === "android";

const CustomSnapCarousel = memo(
  ({ number, refNumber, renderItemFunc, entries }) => {
    const isEven = refNumber % 2 === 0;

    // Do not render examples on Android; because of the zIndex bug, they won't work as is
    return !IS_ANDROID ? (
      <View
        style={[
          styles.exampleContainer,
          isEven ? styles.exampleContainerDark : styles.exampleContainerLight
        ]}
      >
        <Text style={[styles.title, isEven ? {} : styles.titleDark]}>
          Coming Birthdays
        </Text>
        <Carousel
          data={entries}
          renderItem={renderItemFunc}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          scrollInterpolator={
            scrollInterpolators[`scrollInterpolator${refNumber}`]
          }
          slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
          useScrollView={true}
        />
      </View>
    ) : (
      false
    );
  }
);
export default CustomSnapCarousel;
