import React, { PureComponent } from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View
} from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Badge } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import SnapCarousel from "../../examples/SnapCarousel";
import { UpcommingBirthday, Activity } from "../../containers/Home";
import Talks from "../../examples/HeaderParalax";
class DashBoard extends React.Component {
  scrollEvent = e => {
    console.log(e);
  };
  render() {
    return (
      // <ScrollView style={{ backgroundColor: "#fafbfb" }}>
      <ParallaxScrollView
        onScroll={() => {}}
        headerBackgroundColor="rgba(0,0,50,0.5)"
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        scrollEvent={this.scrollEvent}
        renderBackground={() => (
          <View key="background">
            <Image
              source={require("../../assets/bannersky.jpg")}
              style={{
                width: window.width,
                height: PARALLAX_HEADER_HEIGHT
              }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                width: window.width,
                height: PARALLAX_HEADER_HEIGHT
              }}
            />
          </View>
        )}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <View style={styles.menu}>
              <View style={styles.menuImg}>
                <Image
                  source={require("../../assets/calendar.png")}
                  style={{ width: 26, height: 26 }}
                ></Image>
              </View>
              <Text style={styles.menuText}>Calendar</Text>
            </View>
            <View style={styles.menu}>
              <View style={styles.menuImg}>
                <Image
                  source={require("../../assets/calendar.png")}
                  style={{ width: 26, height: 26 }}
                ></Image>
              </View>
              <Text style={styles.menuText}>News</Text>
            </View>
            <View style={styles.menu}>
              <View style={styles.menuImg}>
                <Image
                  source={require("../../assets/calendar.png")}
                  style={{ width: 26, height: 26 }}
                ></Image>
              </View>
              <Text style={styles.menuText}>Campaigns</Text>
            </View>
            <View style={styles.menu}>
              <View style={styles.menuImg}>
                <Image
                  source={require("../../assets/calendar.png")}
                  style={{ width: 26, height: 26 }}
                ></Image>
              </View>
              <Text style={styles.menuText}>Premiums</Text>
            </View>
          </View>
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            {/* <View style={{ flexDirection: "row" }}>
              <Icon name="calendar" size={18} color="#fff" light />
              <Icon name="calendar" size={18} color="#fff" light />
              <Icon name="calendar" size={18} color="#fff" light />
              <Icon name="calendar" size={18} color="#fff" light />
            </View> */}
          </View>
        )}
        renderFixedHeader={() => (
          <View key="fixed-header" style={styles.fixedSection}>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text style={{ color: "#fff" }}>Hello,</Text>
              <Text style={{ fontWeight: "600", color: "#fff" }}>
                {" "}
                Quang Dũng
              </Text>
            </View>
            <View style={{ justifyContent: "centr", flexDirection: "row" }}>
              <Text style={styles.fixedSectionText}>
                <Icon name="search" size={18} color="#fff" light />
              </Text>
              <View
                style={
                  (styles.fixedSectionText,
                  { marginLeft: 30, position: "relative" })
                }
              >
                <Icon name="bell" size={18} color="#fff" light />
                <Badge
                  value="99+"
                  status="error"
                  containerStyle={{
                    position: "absolute",
                    bottom: 12,
                    left: 8,
                    width: 30
                  }}
                />
              </View>
              <Text style={(styles.fixedSectionText, { marginLeft: 30 })}>
                <Icon name="power-off" size={18} color="#fff" light />
              </Text>
            </View>
          </View>
        )}
      >
        <UpcommingBirthday />
        <Activity />
      </ParallaxScrollView>
    );
  }
}
const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 180;
const STICKY_HEADER_HEIGHT = 60;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "rgba(0,0,40,0.5)"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
    zIndex: 1
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: window.width,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "#1C5FBF",
    opacity: 0.4,
    zIndex: 10000
  },
  stickySectionText: {
    color: "white",
    fontSize: 20
  },
  fixedSection: {
    position: "absolute",
    height: STICKY_HEADER_HEIGHT,
    top: 0,
    width: window.width,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,20,0.5)",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    zIndex: 1
  },
  fixedSectionText: {
    color: "#999",
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 50
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: "white",
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: "hidden",
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center"
  },
  rowText: {
    fontSize: 20
  },
  menu: {
    alignItems: "center",
    justifyContent: "center"
  },
  menuImg: {
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#5BC5F2",
    borderWidth: 1,
    borderRadius: 16
  },
  menuText: {
    fontSize: 14,
    marginTop: 8,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "600"
  }
});

export default DashBoard;
