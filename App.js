import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// the speical components features

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working')
  return (
    <View style={styles.container}> 
    {/* view = div compon ent */}
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText('The Text has Changed!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
