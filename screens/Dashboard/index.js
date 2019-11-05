import React, { PureComponent } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import SnapCarousel from "../../examples/SnapCarousel";
import UpcommingBirthday from "../../containers/UpcommingBirthday";
class DashBoard extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <UpcommingBirthday />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DashBoard;
