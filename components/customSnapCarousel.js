import React, { memo, useRef } from "react";
import { Platform, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import { ENTRIES1, ENTRIES2 } from "../examples/SnapCarousel/entries";
import { scrollInterpolators, animatedStyles } from "../utils/animation";
import { sliderWidth, itemWidth } from "../styles/sliderEntry.style";
import styles from "../styles/index.style";

const IS_ANDROID = Platform.OS === "android";
const SLIDER_1_FIRST_ITEM = 1;
const CustomSnapCarousel = memo(
  ({ number, refNumber, renderItemFunc, entries }) => {
    const isEven = refNumber % 2 === 0;

    // Do not render examples on Android; because of the zIndex bug, they won't work as is
    return !IS_ANDROID ? (
      <View style={[styles.exampleContainer]}>
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

const SnapCarouselSlider = memo(
  ({ number, title, renderItemFunc, entries }) => {
    const sliderRef = useRef(null);
    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{`Example ${number}`}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          ref={sliderRef}
          data={entries}
          renderItem={renderItemFunc}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
        />
      </View>
    );
  }
);
export { CustomSnapCarousel, SnapCarouselSlider };
