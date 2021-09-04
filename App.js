import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Button, Text } from 'react-native';
import { Input, List, Map, Modal, Panel } from './components';

export default function App() {

  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(false)
  const [puntosTemp, setPuntosTemp] = useState({})
  

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntosTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntosTemp, name: nombre }
    setPuntos([ ...puntos, newPunto  ])
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  const handleCancel = () => {
    setVisibility(false)
    setNombre('')
  }
  
  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        puntos={puntos}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressLeft={handleLista}
        textLeft='List'
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        {
          visibilityFilter === 'new_punto'
            ? 
            <>
              <View style={styles.form}>
                <Input
                  title='Name'
                  placeholder='Name to point'
                  onChangeText={handleChangeText}
                />
              </View>
              <View style={styles.buttons}>
                <Button
                  title='Accept'
                  onPress={handleSubmit}
                />
                <Button
                  title='Cancel'
                  onPress={handleCancel}
                />
              </View>
            </>
            :
            <List closeModal={()=> setVisibility(false)} puntos={puntos}/>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 15
  },
  buttons: {
    padding: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
});
