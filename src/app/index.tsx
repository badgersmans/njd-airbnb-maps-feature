import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { dummy } from '@assets/data/dummy';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '@/components/CustomMarker';
import ApartmentListItem from '@/components/ApartmentListItem';

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
          <CustomMarker key={item.id} apartment={item}/>
        ))}
      </MapView>
      {/* Display selected apartment */}
      <ApartmentListItem apartment={dummy[0]}/>
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