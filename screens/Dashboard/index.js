import React, { PureComponent } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import SnapCarousel from "../../examples/SnapCarousel";
import {UpcommingBirthday, Activity} from "../../containers/Home";
class DashBoard extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor: "#5BC5F2"}}>
          <UpcommingBirthday />
          <Activity/>
          {/* <SnapCarousel/> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DashBoard;
