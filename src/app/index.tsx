import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { dummy } from '@assets/data/dummy';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          longitude: 100.497027,
          latitude: 13.759030,
          latitudeDelta: 0.0922, 
          longitudeDelta: 0.0421,
        }}
      >
        {dummy.map((item) => (
          <Marker
            key={item.id}
            coordinate={{
              longitude: item.longitude,
              latitude: item.latitude
            }}
            title={item.title}
            description={item.price.toString()}
          >
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>RM {item.price}</Text>
            </View>
          </Marker>
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
  priceContainer: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey'

    // shadows
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  priceText: {
    fontWeight: 'bold',
  }
  
});