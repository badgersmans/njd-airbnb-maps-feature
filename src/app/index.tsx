import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { dummy } from '@assets/data/dummy';
import MapView, { PROVIDER_GOOGLE, AnimatedRegion, Animated } from 'react-native-maps';
import CustomMarker from '@/components/CustomMarker';
import ApartmentListItem from '@/components/ApartmentListItem';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

export default function MapsScreen() {
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [mapRegion, setMapRegion] = useState({
    longitude: 100.497027,
    latitude: 13.759030,
    latitudeDelta: 0.05, 
    longitudeDelta: 0.04,
  })

  // Initialize animated region
  const animatedRegion = useRef(new AnimatedRegion({
    latitude: 13.759030,
    longitude: 100.497027,
    latitudeDelta: 0.05,
    longitudeDelta: 0.04,
  })).current;
  const snapPoints = useMemo(() => [75, '25%', '50%', '90%'], [])

  return (
    <View style={styles.container}>
      <Animated 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        region={mapRegion}
        onRegionChange={setMapRegion}
      >
        {dummy.map((apartment) => (
          <CustomMarker key={apartment.id} apartment={apartment} onPress={() => setSelectedApartment(apartment)}/>
        ))}
      </Animated>
      {/* Display selected apartment */}
      {selectedApartment && (
        <ApartmentListItem apartment={selectedApartment} containerStyle={{
            position: 'absolute',
            bottom: typeof snapPoints[0] === 'number' ? snapPoints[0] + 10 : 100,
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
        }}/>
      )}

      <BottomSheet
        // ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={() => console.log('on change')}
      >
        <View style={{flex: 1}}>
          <Text style={styles.listTitle}>Over {dummy.length} places</Text>
        </View>
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
  listTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 30,
  }
});