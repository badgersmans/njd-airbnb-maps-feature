import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { dummy } from '@assets/data/dummy';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} >
        {dummy.map((item) => (
          <Marker
            key={item.id}
            coordinate={{
              longitude: item.longitude,
              latitude: item.latitude
            }}
            title={item.title}
            description={item.price.toString()}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});