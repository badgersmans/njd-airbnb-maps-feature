import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { dummy } from '@assets/data/dummy';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarker from '@/components/CustomMarker';
import ApartmentListItem from '@/components/ApartmentListItem';
import BottomSheet, { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet';

export default function MapsScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const snapPoints = useMemo(() => ['25%', '50%', '80%'], [])

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
        <ApartmentListItem apartment={selectedApartment} containerStyle={styles.nonListStyle}/>
      )}

      <BottomSheet
        // ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
        // onChange={handleSheetChanges}
      >
        {/* <BottomSheetView style={{}}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView> */}
      <BottomSheetFlatList
          data={dummy}
          keyExtractor={(i) => i.id.toString()}
          renderItem={({item}) => (
            <ApartmentListItem apartment={item}/>
          )}
          contentContainerStyle={{gap: 10, padding: 10}}
          showsVerticalScrollIndicator={false}
      />
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
  nonListStyle: {
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  }
});