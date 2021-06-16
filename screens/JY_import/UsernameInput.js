import React from "react";
import { StyleSheet, TextInput } from "react-native";

const UsernameInput = () => {
  const [text, test] = React.useState("Not so Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={test}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default UsernameInput