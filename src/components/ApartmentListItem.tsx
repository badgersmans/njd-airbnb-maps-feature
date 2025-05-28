import { Apartment } from '@/types/types'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Ionicons, FontAwesome} from '@expo/vector-icons';

type ApartmentListItemProps = {
  apartment: Apartment
}

export default function ApartmentListItem({apartment}: ApartmentListItemProps) {
  return (
    <View style={styles.card}>
      <Image source={{uri: apartment.image}} style={styles.image}/>
      <View style={styles.rightContainer}>
        <View style={styles.iconAndTitleContainer}>
          <Text style={styles.title}>{apartment.title}</Text>
          <TouchableOpacity onPress={() => console.log('liked...')}>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.description}>{apartment.description}</Text>

        <View style={styles.footerContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.price}>RM {apartment.price} </Text>
            <Text style={styles.perNight}>night</Text>
          </View>

          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={17} color="black" />
            <Text style={{}}>{apartment.rating}</Text>
            <Text style={{}}>({apartment.numberOfStars})</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   card: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
    flexDirection: 'row',
    borderRadius: 10,

    // shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  rightContainer: {
    // backgroundColor: 'grey',
    padding: 10,
    paddingTop: 15,
    flex: 1
  },
  image: {
    height: 150,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  iconAndTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  title: {
    // fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'grey'
  },
  price: {
    fontWeight: 'bold'
  },
  footerContainer: {
    flexDirection: 'row', 
    marginTop: 'auto',
    justifyContent: 'space-between',
    // paddingBottom: 10,
    // backgroundColor: 'red',
  },
  ratingContainer: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    gap: 5
  },
})