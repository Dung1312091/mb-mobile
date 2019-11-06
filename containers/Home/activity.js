import React, { PureComponent } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "../../styles/index.style";
import { SnapCarouselSlider } from "../../components/customSnapCarousel";
export const entries = [
  {
    name: "Alice",
    birthday: "12/11/1990",
    illustration: require("../../assets/alice.jpg")
  },
  {
    name: "Barrera",
    birthday: "10/1/1994",
    illustration: require("../../assets/Barrera.jpg")
  },
  {
    name: "Boyle",
    birthday: "01/10/1995",
    illustration: require("../../assets/Boyle.jpg")
  },
  {
    name: "Alice",
    birthday: "12/11/1990",
    illustration: require("../../assets/alice.jpg")
  },
  {
    name: "Barrera",
    birthday: "10/1/1994",
    illustration: require("../../assets/Barrera.jpg")
  },
  {
    name: "Alice",
    birthday: "12/11/1990",
    illustration: require("../../assets/alice.jpg")
  },
  {
    name: "Boyle",
    birthday: "01/10/1995",
    illustration: require("../../assets/Boyle.jpg")
  },
  {
    name: "Nora",
    birthday: "20/10/1990",
    illustration: require("../../assets/Nora.jpg")
  },
  {
    name: "Boyle",
    birthday: "01/10/1995",
    illustration: require("../../assets/Boyle.jpg")
  },
  {
    name: "Nora",
    birthday: "20/10/1990",
    illustration: require("../../assets/Nora.jpg")
  }
];
class RenderCarouselItem extends PureComponent {
  get image() {
    const {
      data: { illustration }
    } = this.props;
    return (
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
        style={{
          backgroundColor: "#E5E5E5",
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8
        }}
        onPress={() => {
          alert(`You've clicked '${name}'`);
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Image source={require("../../assets/email.png")} />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>9:00</Text>
            <Text>Email to Mr. Khai</Text>
            <Text>Lead - Mr. Hoàn Văn Khải</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

function renderItemWithParallax({ item, index }, parallaxProps) {
  return (
    <RenderCarouselItem
      data={item}
      even={(index + 1) % 2 === 0}
      parallax={true}
      parallaxProps={parallaxProps}
    />
  );
}
class Activity extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <SnapCarouselSlider
          number={1}
          title="TODAY"
          renderItemFunc={renderItemWithParallax}
          entries={entries}
        />
      </View>
    );
  }
}

export default Activity;
