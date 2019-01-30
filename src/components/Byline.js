import React, { PropTypes } from 'react'
import {} from 'react-native'
import SmallText from './SmallText'
import * as globalStyles from '../styles/global'

const Bylines = ({ date, author, location }) => (
  <View>
    <View style={StyleSheet.row}>
      <SmallText>{date.toLocaleDateString()}</SmallText>
      <SmallText>{author}</SmallText>
    </View>

    {location ? (
      <View style={styles.row}>
        <SmallText style={stlyes.location}>{location}</SmallText>
      </View>
    ) : null}
  </View>
)

Bylines.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  location: {
    color: globalStyles.MUTED_COLOR
  }
})

export default Bylines
