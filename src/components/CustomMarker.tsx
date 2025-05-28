import { View, Text, StyleSheet } from 'react-native'
import { Marker } from 'react-native-maps';

export default function CustomMarker({ apartment }) {
  return (
    <Marker
      key={apartment.id}
      coordinate={{
        longitude: apartment.longitude,
        latitude: apartment.latitude
      }}
    >
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>RM {apartment.price}</Text>
      </View>
    </Marker>
  )
}

const styles = StyleSheet.create({
    priceContainer: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey'
  },
  priceText: {
    fontWeight: 'bold',
  }
})