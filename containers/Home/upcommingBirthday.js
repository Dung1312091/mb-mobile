import React, { PureComponent } from "react";
import { View } from "react-native";
import styles from "../../styles/index.style";
import SliderEntry from "../../components/sliderEntry";
import { CustomSnapCarousel } from "../../components/customSnapCarousel";
export const data = [
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
function renderLightItem({ item, index }) {
  return <SliderEntry data={item} even={false} />;
}
class UpcommingBirthday extends PureComponent {
  render() {
    return (
      <View>
        <CustomSnapCarousel
          number={6}
          refNumber={2}
          renderItemFunc={renderLightItem}
          entries={data}
        />
      </View>
    );
  }
}

export default UpcommingBirthday;
