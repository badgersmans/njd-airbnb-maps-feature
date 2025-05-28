import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { dummy } from '@assets/data/dummy';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '@/components/CustomMarker';
import ApartmentListItem from '@/components/ApartmentListItem';

export default function MapsScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null)

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
        {dummy.map((apartment) => (
          <CustomMarker key={apartment.id} apartment={apartment} onPress={() => setSelectedApartment(apartment)}/>
        ))}
      </MapView>
      {/* Display selected apartment */}
      {selectedApartment && (
        <ApartmentListItem apartment={selectedApartment}/>
      )}
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