import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { dummy } from '@assets/data/dummy';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '@/components/CustomMarker';
import ApartmentListItem from '@/components/ApartmentListItem';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function MapsScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Maps'}} />
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

      <BottomSheet
        // ref={bottomSheetRef}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView style={{}}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
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