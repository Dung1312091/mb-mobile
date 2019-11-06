import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { ParallaxImage } from "react-native-snap-carousel";
import styles from "../styles/sliderEntry.style";

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const {
      data: { illustration },
      parallax,
      parallaxProps,
      even
    } = this.props;
    return parallax ? (
      <ParallaxImage
        source={illustration}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {}
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.25)"}
        {...parallaxProps}
      />
    ) : (
      <Image
        source={illustration}
        // style={styles.image}
        style={{ borderRadius: 64, marginBottom: 5 }}
      />
    );
  }

  render() {
    const {
      data: { name, birthday },
      even
    } = this.props;

    const uppercaseTitle = name ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        {name.toUpperCase()}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={
          (styles.slideInnerContainer,
          {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1
          })
        }
        onPress={() => {
          alert(`You've clicked '${name}'`);
        }}
      >
        <View style={styles.shadow} />
        <View
          style={[
            styles.imageContainer,
            {
              backgroundColor: "#5cbae2b8",
              justifyContent: "center",
              alignItems: "center"
            }
          ]}
        >
          {this.image}
          <Text>SILVER</Text>
        </View>
        <View style={[styles.textContainer, { alignItems: "center" }]}>
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            {birthday}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
