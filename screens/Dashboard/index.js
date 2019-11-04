import React, { PureComponent } from 'react'
import {View, Text, Button} from "react-native"
import {connect} from "react-redux"
 class DashBoard extends PureComponent {
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    console.log("AA", this.props.commons)
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>DashBoard Page</Text>
        <Button
        title="Go to Leads"
        onPress={() => navigate('Leads')}
      />
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    commons: state.commonsReducer
  }
}
export default connect(mapStateToProps)(DashBoard)