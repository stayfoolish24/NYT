import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import * as globalStyles from '../styles/global'

class Search extends Component {
  constructor(prop) {
    super(props)
    this.state = {
      searchText: ''
    }
  }
  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ searchText: text })}
            value={this.state.searchText}
            placeholder={'Search placeholder test'}
            placeholderTextColor={globalStyles.MUTED_COLOR}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: globalStyles.TEXT_COLOR,
    paddingHorizontal: 5,
    flex: 1
  },
  search: {
    borderColor: globalStyles.MUTED_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  }
})

export default Search
