import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
export default ButtonCustome = memo(props => {
  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.buttonContainer}
      {...props}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    width: 300
  },
  buttonContainer: {
    borderRadius: 8,
    height: 50
  }
});
