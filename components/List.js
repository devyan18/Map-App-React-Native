import React from 'react'
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

const List = ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map(e => e.name)}
          renderItem={({ item }) =>
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          }
          keyExtractor={item => item}
          />
      </View>
      <View style={styles.button}>
        <Button title='Close' onPress={closeModal} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 300,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 60,
    justifyContent: 'center',
    padding: 15
  },
  button: {
    padding: 15
  }
})


export default List
