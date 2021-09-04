import React from 'react'
import { StyleSheet, Dimensions, Button, View } from 'react-native'

const Panel = ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button
        title={textLeft}
        onPress={onPressLeft}
      />
      <Button
        title='View/Hide'
        onPress={togglePointsFilter}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})

export default Panel
