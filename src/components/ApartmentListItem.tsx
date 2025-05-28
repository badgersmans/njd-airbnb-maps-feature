import { Apartment } from '@/types/types'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Ionicons, FontAwesome} from '@expo/vector-icons';

type ApartmentListItemProps = {
  apartment: Apartment
}

export default function ApartmentListItem({apartment}: ApartmentListItemProps) {
  return (
    <View style={styles.mapOverlayContainer}>
      <View style={styles.container}>
        <Image source={{uri: apartment.image}} style={styles.image}/>
        <View style={styles.contentContainer}>

          <View style={styles.iconAndTitleContainer}>
            <Text style={styles.title}>{apartment.title}</Text>
            <TouchableOpacity onPress={() => console.log('liked...')}>
              <Ionicons name="heart-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{apartment.description}</Text>
            <Text style={styles.description}>{apartment.description}</Text>
          </View>

          <View style={styles.footerContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.price}>RM {apartment.price} </Text>
              <Text style={styles.perNight}>night</Text>
            </View>
            
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={17} color="black" />
              <Text style={styles.rating}>{apartment.rating}</Text>
              <Text style={styles.starCount}>({apartment.numberOfStars})</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   mapOverlayContainer: {
    // backgroundColor: 'red',
    // height: '100%',
    position: 'absolute',
    bottom: 50,
    left: 10,
    right: 10,
    // padding: 10
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
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
  contentContainer: {
    // backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 10,

  },
  image: {
    height: '100%',
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  iconAndTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginTop: 15
  },
  title: {
    fontSize: 15,
    fontWeight: '600'
  },
  descriptionContainer: {
    gap: 8,
    paddingBottom: 25,
    // backgroundColor: 'red'
  },
  description: {
    fontSize: 14,
    color: 'grey'
  },
  price: {
    fontWeight: 'bold'
  },
  perNight: {},
  starCount: {},
  rating: {},
  footerContainer: {
    flexDirection: 'row', 
    marginTop: 'auto',
    justifyContent: 'space-between',
    paddingBottom: 10,
    // backgroundColor: 'grey',
  },
  ratingContainer: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    gap: 5
  },
})