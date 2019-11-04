import React, { memo, forwardRef } from "react";
import { StyleSheet } from "react-native";

import { Input } from "react-native-elements";
const InputCustome = forwardRef((props, ref) => (
  <Input
    ref={ref}
    containerStyle={styles.container}
    inputContainerStyle={styles.containerInput}
    leftIconContainerStyle={styles.leftIcon}
    {...props}
  />
));
const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  containerInput: {
    borderColor: "#0C376C",
    borderWidth: 1,
    height: 50,
    width: "100%",
    borderRadius: 8
  },
  leftIcon: {
    marginRight: 5
  }
});
export default memo(InputCustome);
