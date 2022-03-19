---
sidebar_position: 5
---

# Building download button

Create `components/DownloadButton.js` file:

```js
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function DownloadButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name="cloud-download" size={16} color="black" style={styles.icon} />
      <Text style={styles.text}>Download</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    marginEnd: 4
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '500',
  }
});
```

# Building Sync button (very similar to above)

Create `components/SyncButton.js` file:

```js
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function SyncButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome5 name="sync" size={14} color="black" style={styles.icon} />
      <Text style={styles.text}>Sync</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    marginEnd: 6
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: '500',
  }
});
```
