import React from 'react'
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

const Map = ({ onLongPress, puntos, pointsFilter }) => {
  return (
    <MapView
      style={styles.map}
      onLongPress={onLongPress}
    >
      {
        pointsFilter &&
        puntos.map(e =>
          <Marker
            key={e.name}
            coordinate={e.coordinate}
            title={e.name}
          />)
      }
    </MapView>
  )
}
const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 60 ,
    width: Dimensions.get('window').width
  }
});


export default Map
