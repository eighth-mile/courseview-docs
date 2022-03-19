---
sidebar_position: 4
---

# Empty view component

Create a new folder `components` and create a new file `components/HomeEmptyView.js`

```js
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default function HomeEmptyView({ onPress }) {
  return (
    <View style={styles.container}>
      <AntDesign name="addfile" size={96} color="#CBCBCB" />
      <Text style={styles.text}>
        Consider adding programs from our repository
      </Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>ADD COURSE</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#727272',
    padding: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3C6BA3',
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});
```

You can add the following line in `App.js` to test the component:

```js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import HomeEmptyView from './components/HomeEmptyView';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeEmptyView />
      <StatusBar style="auto" />
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
```