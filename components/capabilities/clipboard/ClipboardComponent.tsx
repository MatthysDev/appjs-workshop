import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

ClipboardComponent.instructions = `
This component lets you copy and paste text from clipboard.

It uses this library:

[https://www.npmjs.com/package/@react-native-clipboard/clipboard](https://www.npmjs.com/package/@react-native-clipboard/clipboard)
`;

function ClipboardComponent() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          Clipboard.setString('Hello From Workshops');
        }}
        title="Copy to clipboard"
      />
      <Button
        onPress={() => {
          Clipboard.getString().then(Alert.alert);
        }}
        title="Read from clipboard"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'center',
  },
  pdf: {
    flex: 1,
  },
});

export default ClipboardComponent;
